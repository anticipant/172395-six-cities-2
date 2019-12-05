import {createStore} from "redux";
import {reducer} from "../reducer/reducer";


import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, composeEnhancers());

export default store;
