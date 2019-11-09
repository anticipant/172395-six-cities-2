import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getDateFormatMMYYYY, getDateFormatYYYYMMDD} from "../../help/utils";

class ReviewsItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this;
    const date = new Date(`${reviews.date}`);

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={reviews.avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">{reviews.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{
                width: `94%`,
              }}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{reviews.comment}</p>
          <time className="reviews__time" dateTime={getDateFormatYYYYMMDD(date)}>
            {getDateFormatMMYYYY(date)}
          </time>
        </div>
      </li>
    );
  }
}

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsItem;
