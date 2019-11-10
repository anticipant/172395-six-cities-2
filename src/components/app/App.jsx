import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferDetails from "../offer-details/OfferDetails";
import Map from "../map/Map";
import MainPage from "../main-page/MainPage";

const getPageScreen = (props) => {
  const {offers, nearbyOffers, selectedCard, cardClickHandler, leaflet} = props;
  const HEIGHT_OF_OFFER_DETAILS_MAP = 500;

  switch (location.pathname) {
    case `/`:
      return (
        <MainPage
          cards = {offers}
          onCardClick = {cardClickHandler}
          name = {`Amsterdam`}
        >
          <Map
            name = {`Amsterdam`}
            offers = {offers}
            leaflet = {leaflet}
          />
        </MainPage>
      );
    case `/offer`:
      return selectedCard ? (
        <OfferDetails
          card = {selectedCard}
          nearbyOffers = {nearbyOffers}
          onCardClick = {cardClickHandler}
        >
          <Map
            name = {`Amsterdam`}
            offers = {nearbyOffers}
            leaflet = {leaflet}
            height = {HEIGHT_OF_OFFER_DETAILS_MAP}
          />
        </OfferDetails>
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
