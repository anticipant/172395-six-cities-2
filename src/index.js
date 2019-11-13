import leaflet from 'leaflet';
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app";
import {nearbyOffers} from "./mocks/nearby-offers";
import {offers} from "./mocks/offers";

const init = () => {

  ReactDOM.render(
      <App
        leaflet = {leaflet}
        offers = {offers}
        nearbyOffers = {nearbyOffers}
      />,
      document.querySelector(`#root`));
};

init();


