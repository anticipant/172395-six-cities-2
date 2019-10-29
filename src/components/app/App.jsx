import React from 'react';
import PropTypes from 'prop-types';

import SuggestionList from "../suggestion-list/SuggestionList";

const App = (props) => {
  return (
    <SuggestionList
      cards = {props.offers}
      // onClickHandler={props.settings.onClickHandler}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
