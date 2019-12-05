import {offers} from "../mocks/offers";
import {SELECT_CITY} from "../actions/select-city-action";
import {SET_OFFERS_LIST} from "../actions/set-offers-list-action";

export const initialState = {
  cities: [{id: 1, name: `Paris`}, {id: 2, name: `Cologne`}, {id: 3, name: `Brussels`}, {id: 4, name: `Amsterdam`}, {id: 5, name: `Hamburg`}, {id: 6, name: `Dusseldorf`}],
  activeCity: `Amsterdam`,
  offers,
  offersList: offers.filter((it) => it.city.name === `Amsterdam`),
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SELECT_CITY:
      return Object.assign({}, state, {
        activeCity: action.payload,
      });

    case SET_OFFERS_LIST:
      const filteredOffers = state.offers.filter((it) => it.city.name === action.payload);
      return Object.assign({}, state, {
        offersList: filteredOffers,
      });

    case `RESET_STORE`:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
