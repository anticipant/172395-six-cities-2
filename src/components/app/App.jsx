import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferList from "../offer-list/OfferList";
import OfferDetails from "../offer-details/OfferDetails";
import Map from "../map/Map";

const getPageScreen = (props) => {
  const {offers, selectedCard, cardClickHandler, leaflet} = props;

  switch (location.pathname) {
    case `/`:
      return (
        <OfferList
          cards = {offers}
          onCardClick = {cardClickHandler}
        >
          <Map name={`Amsterdam`} offers={offers} leaflet={leaflet}/>
        </OfferList>
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
  leaflet: PropTypes.object,
};


class App extends PureComponent {

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
            leaflet: this.props.leaflet,
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
  leaflet: PropTypes.object,
};

export default App;
