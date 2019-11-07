import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

import SuggestionList from "../suggestion-list/SuggestionList";
import OfferDetails from "../offer-details/OfferDetails";
import Map from "../map/Map";

const getPageScreen = (props) => {
  const {offers, selectedCard, cardClickHandler} = props;

  switch (location.pathname) {
    case `/`:
      return (
        <SuggestionList
          cards = {offers}
          onCardClick = {cardClickHandler}
        >
          <Map name={`Amsterdam`} offers={offers}/>
        </SuggestionList>
      );
    case `/offer`:
      return selectedCard ? <OfferDetails card={selectedCard}/> : null;
    default:
      return null;
  }
};


getPageScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCard: PropTypes.object,
  cardClickHandler: PropTypes.func,
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  cardClickHandler(card) {
    this.setState({
      selectedCard: card,
    });
  }

  render() {
    return (
      <Fragment>
        {
          getPageScreen({
            offers: this.props.offers,
            cardClickHandler: this.cardClickHandler,
            selectedCard: this.state.selectedCard,
          })
        }
      </Fragment>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
