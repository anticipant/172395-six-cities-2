import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from "../offer-card/offer-card";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 1,
    };
    this.hoverCardHandler = this.hoverCardHandler.bind(this);
  }

  hoverCardHandler(card) {
    if (this.state.activeCard !== card.id) {
      this.setState({
        activeCard: card.id,
      });
    }
  }

  render() {
    const {cards, blockClassName} = this.props;
    return (
      cards.map((it) => <OfferCard
        blockClassName = {blockClassName}
        key = {it.id}
        card = {it}
        onHover = {this.hoverCardHandler}
        onCardClick = {this.props.onCardClick}
      />)
    );
  }
}

OfferList.propTypes = {
  blockClassName: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default OfferList;
