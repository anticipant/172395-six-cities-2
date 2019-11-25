import leaflet from 'leaflet';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app";
import {nearbyOffers} from "./mocks/nearby-offers";
import {offers} from "./mocks/offers";
import store from "./store/store";

const init = () => {

  ReactDOM.render(
      <Provider store={store}>
        <App
          leaflet = {leaflet}
          offers = {offers}
          nearbyOffers = {nearbyOffers}
        />
      </Provider>,
      document.querySelector(`#root`));
};

init();


