export const SET_OFFERS_LIST = `SET_OFFERS_LIST`;
export const setOffersListAction = (cityName) => {
  return {
    type: SET_OFFERS_LIST,
    payload: cityName,
  };
};
