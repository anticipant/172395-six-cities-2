import React from 'react';
import PropTypes from 'prop-types';

import SuggestionList from "../suggestion-list/SuggestionList";

const App = (props) => {
  return (
    <SuggestionList cards={props.settings.cards} onClickHandler={props.settings.onClickHandler}/>
  );
};

App.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default App;
