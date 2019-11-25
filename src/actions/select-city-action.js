export const SELECT_CITY = `SELECT_CITY`;
export const selectCityAction = (cityName) => {
  return {
    type: SELECT_CITY,
    payload: cityName,
  };
};
