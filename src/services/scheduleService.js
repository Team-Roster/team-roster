/** @format */
import sample from "lodash.sample";
import dayjs, { getDates, organizeDates } from "#infra/plugins/dayjs.js";
import schedules from "#models/schedules.js";
import userService from "#services/userService.js";
import eventService from "#services/eventService.js";

const setWeeklyRecurrence = async function (event, end) {
  let dates = getDates(event.when, end);
  let weekday = dayjs(event.when).weekday();
  let result = [];

  for await (let date of dates) {
    if (date.weekday === weekday) {
      result.push({
        ...event,
        when: date.date,
        users_loked: [],
      });
    }
  }

  return result;
};

const getRandom = (users, role) => {
  const usersWhoHaveRole = users.filter((i) => {
    if (i.roles.includes(role)) return i.id;
  });

  return sample(usersWhoHaveRole.map((i) => i.id));
};

const sortUserByRole = async (role, users, exclude) => {
  let election = getRandom(users, role);
  let includes = true;

  let tries = 0;

  while (includes) {
    election = getRandom(users, role);
    includes = exclude.includes(election);
    tries++;
    if (tries === 100) break;
  }

  return election;
};

const prepareEvents = async (start, end) => {
  const events = await eventService().list(start, end);

  let schedule = [];

  for await (let event of events) {
    if (event.recurrence === "weekly") {
      let items = await setWeeklyRecurrence(event, end);
      schedule = [...schedule, ...items];
    }
    if (event.recurrence === "once") {
      schedule = [...schedule, event];
    }
  }

  return organizeDates(schedule);
};

const prepareTeam = async (requiredRoles) => {
  const result = [];
  for (let item of requiredRoles) {
    result.push({
      role: item,
      user: null,
    });
  }
  return result;
};

const prepareUsers = async (events, branch, team) => {
  const result = [];

  for (let event of events) {
    let users = await userService(branch, team).usersByRoles(
      event.required_roles
    );

    result.push({
      ...event,
      users: await verifyUserAvailability(users, event),
      team: await prepareTeam(event.required_roles),
    });
  }

  return result;
};

const verifyUserAvailability = async (users, event) => {
  const result = [];
  let weekday = dayjs(event.when).weekday();

  for (let user of users) {
    if (!user.exclude_me_on_days_that_are.includes(weekday)) {
      result.push(user);
    }
  }

  return result;
};

const getUserByRole = async (users, role) => {
  return users.filter((user) => {
    return user.roles.includes(role);
  });
};

const teamElection = async (team, data) => {
  let exclude = [];
  for (let i in team) {
    const users = await getUserByRole(data.users, team[i].role);
    const sorted = await sortUserByRole(team[i].role, users, exclude);
    exclude.push(sorted);
    team[i].user = sorted;
  }

  return team;
};

const mekaElection = async (data) => {
  for (let i in data) {
    data[i].team = await teamElection(data[i].team, data[i]);
  }
  return data;
};

export default () => {
  return {
    createSchedule: async function (data) {
      try {
        console.log(await schedules().getSchedules());
        const { start, end, branch, team } = data;

        let events = [];

        events = await prepareEvents(start, end);
        events = await prepareUsers(events, branch, team);

        const result = await mekaElection(events);

        return result.map((i) => ({
          name: i.name,
          when: i.when,
          time: i.time,
          recurrence: i.recurrence,
          required_roles: i.required_roles,
          declined_by: i.declined_by,
          users_loked: i.users_loked,
          team: i.team,
        }));
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  };
};
