import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onHover() {
    this.props.onHover(this.props.card);
  }

  onCardClick(evt) {
    evt.preventDefault();
    let path = evt.target.href;
    window.history.pushState({route: path}, `some title`, path);
    this.props.onCardClick(this.props.card);
  }

  render() {
    const {card, blockClassName} = this.props;
    const isMainPageClass = blockClassName === `cities`;

    return (
      <article onMouseOver={this.onHover} className={`${isMainPageClass ? `cities__place-card` : `near-places__card`} place-card`}>
        {
          card.isPremium && <div className="place-card__mark"><span>Premium</span></div>
        }
        <div className={`${isMainPageClass ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{card.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${card.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{
                width: `${card.rating}%`,
              }}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name">
            <a
              onClick={this.onCardClick}
              href="/offer">{card.title}</a>
          </h2>
          <p className="place-card__type">{card.type}</p>
        </div>
      </article>
    );
  }
}
OfferCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  blockClassName: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default OfferCard;
