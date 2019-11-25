import {initialState, reducer} from "./reducer";
import {SELECT_CITY} from "../actions/select-city-action";
import {SET_OFFERS_LIST} from "../actions/set-offers-list-action";

describe(`Reducer work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should return state with city to equal to the transmitted value `, () => {
    expect(reducer(undefined, {type: SELECT_CITY, payload: `Berlin`}).activeCity).toEqual(`Berlin`);
  });

  it(`Reducer should return correct filtered offerList`, () => {
    let state = reducer(undefined, {type: SELECT_CITY, payload: `Paris`});
    state = reducer(state, {type: SET_OFFERS_LIST, payload: `Paris`});

    expect(state.offersList[0].city.name).toEqual(`Paris`);

    state = reducer(undefined, {type: SELECT_CITY, payload: `Amsterdam`});
    state = reducer(state, {type: SET_OFFERS_LIST, payload: `Amsterdam`});

    expect(state.offersList[0].city.name).toEqual(`Amsterdam`);

  });

  it(`Reducer should correctly reset application state`, () => {
    const state = Object.assign({}, initialState, {activeCity: `Paris`});

    expect(reducer(state, {type: `RESET_STORE`})).toEqual(initialState);
  });

});
