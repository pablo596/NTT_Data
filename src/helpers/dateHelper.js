export const formatDate = (dateReceived) => {
  const date = new Date(dateReceived),
    year = date.getUTCFullYear();
  let month = '' + (date.getUTCMonth() + 1),
    day = '' + date.getUTCDate();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
};

export const formatDateDisplay = (dateReceived) => {
  const date = new Date(dateReceived),
    year = date.getUTCFullYear();
  let month = '' + (date.getUTCMonth() + 1),
    day = '' + date.getUTCDate();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [day, month, year].join('/');
};

export const addOneYear = (date) => {
  date.setFullYear(date.getFullYear() + 1);
  return date;
};
