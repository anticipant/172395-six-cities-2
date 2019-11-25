import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import MainPage from "../main-page/main-page";
import OfferDetails from "../offer-details/offer-details";

const getPageScreen = (props) => {
  const {nearbyOffers, selectedCard, cardClickHandler, leaflet} = props;

  switch (location.pathname) {
    case `/`:
      return (
        <MainPage
          onCardClick = {cardClickHandler}
          leaflet = {leaflet}
        />
      );
    case `/offer`:
      return selectedCard ? (
        <OfferDetails
          card = {selectedCard}
          nearbyOffers = {nearbyOffers}
          onCardClick = {cardClickHandler}
          leaflet = {leaflet}
        />
      ) : null;
    default:
      return null;
  }
};


getPageScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
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
            nearbyOffers: this.props.nearbyOffers,
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
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  leaflet: PropTypes.object,
};

export default App;
