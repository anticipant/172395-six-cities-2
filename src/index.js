import React from 'react';
import ReactDOM from 'react-dom';
import leaflet from 'leaflet';
import offers from "./mocks/offers";

import App from "./components/app/App";

const init = () => {

  ReactDOM.render(
      <App
        leaflet = {leaflet}
        offers = {offers}
      />,
      document.querySelector(`#root`));
};

init();


