import React from 'react';
import ReactDOM from 'react-dom';
import offers from "./mocks/offers";

import App from "./components/app/App";

const init = () => {

  ReactDOM.render(
      <App
        offers = {offers}
      />,
      document.querySelector(`#root`));
};

init();


