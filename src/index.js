import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/App";

const init = () => {
  const setting = {
    cards: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
  };

  ReactDOM.render(
      <App
        setting = { setting }
      />,
      document.querySelector(`#root`));
};

init();


