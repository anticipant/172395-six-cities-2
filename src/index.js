import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/App";

const init = () => {
  const settings = {
    cards: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
  };

  ReactDOM.render(
      <App
        settings = { settings }
      />,
      document.querySelector(`#root`));
};

init();


