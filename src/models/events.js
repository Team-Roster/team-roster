/** @format */

const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const events = [
  {
    name: "Culto da Familia",
    when: "2023-11-05",
    time: "18:00",
    recurrence: "weekly",
    required_roles: [0, 1, 2, 3, 4, 5, 6],
    declined_by: [],
  },
  {
    name: "Engate a Quinta",
    when: "2023-11-02",
    time: "20:00",
    recurrence: "weekly",
    required_roles: [0, 2, 3, 4, 5, 6],
    declined_by: [],
  },
  {
    name: "Culto de Mulheres",
    when: "2023-11-28",
    time: "20:00",
    recurrence: "once",
    required_roles: [0, 2, 3, 4, 5, 6],
    declined_by: [],
  },
];

export default () => {
  return {
    getEvents: async function () {
      return events;
    },
  };
};
