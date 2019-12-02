import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(evt) {
    evt.preventDefault();
    let path = evt.target.href;
    window.history.pushState({route: path}, `some title`, path);
    this.props.onItemClick(this.props.item);
  }

  render() {
    const {item, blockClassName} = this.props;

    return (
      <article
        className={`${blockClassName === `cities` ? `cities__place-card` : `near-places__card`} place-card`}>
        {
          item.isPremium && <div className="place-card__mark"><span>Premium</span></div>
        }
        <div className={`${blockClassName}__image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={item.previewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{item.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button button ${item.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{
                width: `${item.rating}%`,
              }}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name">
            <a
              onClick={this.onItemClick}
              href="/offer">{item.title}</a>
          </h2>
          <p className="place-card__type">{item.type}</p>
        </div>
      </article>
    );
  }
}
OfferCard.propTypes = {
  item: PropTypes.shape({
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
  onItemClick: PropTypes.func.isRequired,
};

export default OfferCard;
