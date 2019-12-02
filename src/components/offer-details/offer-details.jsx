import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import Header from "../header/header";
import Map from "../map/map";
import ReviewsList from "../reviews-list/reviews-list";
import {reviews} from '../../mocks/reviews';
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import OfferCard from "../offer-card/offer-card";


const OfferCardWrapped = withActiveItem(OfferCard);

class OfferDetails extends PureComponent {
  render() {
    const {card, nearbyOffers, leaflet} = this.props;
    const HEIGHT_OF_OFFER_DETAILS_MAP = 500;
    return (
      <div className="page">

        <Header/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  card.images.map((it, index) => {
                    return (
                      <div key={it + index} className="property__image-wrapper">
                        <img className="property__image" src={it} alt="Photo studio"/>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  card.isPremium && <div className="property__mark"><span>Premium</span></div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {card.title}
                  </h1>
                  <button className={`place-card__bookmark-button button ${card.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
                    <svg className="place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{
                      width: `${card.rating}%`,
                    }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{card.rating}</span>
                </div>
                <ul className="property__features">
                  {
                    card.maxAdults && 11
                  }
                  {
                    card.bedrooms && <li className="property__feature property__feature--bedrooms">
                      {card.bedrooms} Bedrooms
                    </li>
                  }
                  {
                    card.maxAdults && <li className="property__feature property__feature--adults">
                      Max {card.maxAdults} adults
                    </li>
                  }
                  <li className="property__feature property__feature--entire">
                    Entire place
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{card.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      card.goods.map((it, index) => {
                        return (
                          <li key={it + index} className="property__inside-item">{it}</li>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar" src={card.host.avatarUrl} width="74"
                        height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {card.host.name}
                    </span>
                    {card.host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    {
                      card.description && <p className="property__text">{card.description}</p>
                    }
                  </div>
                </div>
                {
                  reviews.length !== 0 &&
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">
                      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                    </h2>

                    <ReviewsList>
                      {reviews}
                    </ReviewsList>

                    <form className="reviews__form form" action="#" method="post">
                      <label className="reviews__label form__label" htmlFor="review">Your review</label>
                      <div className="reviews__rating-form form__rating">
                        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>

                        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                          <svg className="form__star-image" width="37" height="33">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>
                      </div>
                      <textarea
                        className="reviews__textarea form__textarea"
                        id="review"
                        name="review"
                        placeholder="Tell how was your stay, what you like and what can be improved"
                      ></textarea>
                      <div className="reviews__button-wrapper">
                        <p className="reviews__help">
                          To submit review please make sure to set <span className="reviews__star">rating</span> and
                          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                        </p>
                        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                      </div>
                    </form>
                  </section>
                }
              </div>
            </div>

            <section className="container">
              <Map
                name = {`Amsterdam`}
                offers = {nearbyOffers}
                leaflet = {leaflet}
                height = {HEIGHT_OF_OFFER_DETAILS_MAP}
              />
            </section>

          </section>

          {
            nearbyOffers.length !== 0 && <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <OfferCardWrapped
                    list = {nearbyOffers}
                    onItemClick = {this.props.onCardClick}
                    blockClassName = {`near-places`}
                  />

                </div>
              </section>
            </div>
          }
        </main>
      </div>
    );
  }
}

OfferDetails.propTypes = {
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
  onCardClick: PropTypes.func.isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  leaflet: PropTypes.object,
};

export default OfferDetails;
