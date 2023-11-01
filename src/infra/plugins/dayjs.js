/** @format */

import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
dayjs.extend(weekday);

const dbDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD").toString();
};

const dbDateTime = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss").toString();
};

function getDates(startDate, stopDate) {
  const dateArray = new Array();

  startDate = dayjs(startDate);
  stopDate = dayjs(stopDate);

  while (startDate.isBefore(stopDate)) {
    dateArray.push({
      date: dbDate(startDate),
      weekday: startDate.weekday(),
    });

    startDate = startDate.add(1, "day");
  }

  return dateArray;
}

const organizeDates = (arr) => {
  return arr.sort((a, b) => (dayjs(a.when).isAfter(dayjs(b.when)) ? 1 : -1));
};

export default dayjs;

export { dbDate, dbDateTime, getDates, organizeDates };
