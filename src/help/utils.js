/**
 *
 * @param {Object} date - объект Date
 * @return {string|null} - дату в формате `YYYY-MM-DD`
 */
const getDateFormatYYYYMMDD = (date) => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const correctMonth = `${month}`.length === 1 ? `0${month + 1}` : month;
    const day = date.getDate();
    const correctDay = `${day}`.length === 1 ? `0${day + 1}` : day;

    return `${year}-${correctMonth}-${correctDay}`;
  }
  return null;
};

/**
 *
 * @param {Object} date - объект Date
 * @return {string|null} - дату в формате `MONTH YYYY`
 */
const getDateFormatMMYYYY = (date) => {
  if (date instanceof Date) {
    const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
      `July`, `August`, `September`, `October`, `November`, `December`
    ];
    const year = date.getFullYear();
    const month = date.getMonth();

    return `${monthNames[month]} ${year}`;
  }
  return null;
};

export {
  getDateFormatYYYYMMDD,
  getDateFormatMMYYYY,
};

