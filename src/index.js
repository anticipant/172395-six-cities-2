import React from 'react';
import ReactDOM from 'react-dom';
import leaflet from 'leaflet';
import {offers} from "./mocks/offers";
import {nearbyOffers} from "./mocks/nearby-offers";
import App from "./components/app/App";

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


