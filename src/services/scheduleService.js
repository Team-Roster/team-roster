/** @format */
import sample from "lodash.sample";
import dayjs, {
  dbDate,
  dbDateTime,
  getDates,
  organizeDates,
} from "#infra/plugins/dayjs.js";
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

const makeRandomSort = async (schedule) => {
  let result = [];
  for await (let item of schedule) {
    item.team = [];
    let userSorted = [];
    for await (let role of item.required_roles) {
      let s = await sortUserByRole(role, userSorted, item);
      userSorted.push(s.user);
      item.team.push(s);
    }
    result.push(item);
  }

  result = validations(result);

  return result;
};

const doExcludeUsersFromDay = async () => {
  return {
    role: null,
    user: null,
    users_loked: [],
  };
};

const excludeUsersFromDay = async (data) => {
  for await (let item of data) {
    let weekday = dayjs(item.when).weekday();
    console.log(item.team, weekday);
  }

  // users.map(() => {});
  // return { users, item };
  // console.log(data);
  return data;
};

const sortUserByRole = async (role, exclude) => {
  let users = await userService().usersByRole(role);

  let sorteio = getRandom(users, role);
  let includes = true;

  let tries = 0;

  while (includes) {
    sorteio = getRandom(users, role);
    includes = exclude.includes(sorteio);
    tries++;
    if (tries === 100) break;
  }

  return {
    role,
    user: sorteio,
  };
};

const getDuplicates = (team) => {
  return Object.values(
    team.reduce((c, v) => {
      let k = v.user;
      c[k] = c[k] || [];
      c[k].push(v);
      return c;
    }, {})
  ).reduce((c, v) => (v.length > 1 ? c.concat(v) : c), []);
};

const removeDuplicates = async (data) => {
  for (let item of data) {
    const { team } = item;

    var duplicates = getDuplicates(team);

    if (duplicates.length === 0) continue;

    console.log({ team, duplicates });
  }
  return data;
};

const validations = async (data) => {
  data = await removeDuplicates(data);
  return data;
};

export default () => {
  return {
    make: async function (data) {
      const { start, end } = data;

      const events = await eventService().list();

      let schedule = [];

      for await (let event of events) {
        if (event.recurrence === "weekly") {
          let items = await setWeeklyRecurrence(event, end);
          schedule = [...schedule, ...items];
        }
      }

      schedule = organizeDates(schedule);
      schedule = await makeRandomSort(schedule);
      schedule = await excludeUsersFromDay(schedule);
      schedule = await validations(schedule);

      return schedule;
    },
  };
};
