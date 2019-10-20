import React from 'react';
import PropTypes from 'prop-types';

import SuggestionList from "../suggestion-list/SuggestionList";

const App = (props) => {
  return (
    <SuggestionList cards={props.settings.cards}/>
  );
};

App.propTypes = {
  settings: PropTypes.object,
};

export default App;
