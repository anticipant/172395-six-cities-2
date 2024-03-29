import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {getDateFormatMMYYYY, getDateFormatYYYYMMDD} from "../../help/utils";

class ReviewsItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;
    const date = new Date(`${review.date}`);

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={review.user.avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">{review.user.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{
                width: `${review.rating}%`,
              }}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{review.comment}</p>
          <time className="reviews__time" dateTime={getDateFormatYYYYMMDD(date)}>
            {getDateFormatMMYYYY(date)}
          </time>
        </div>
      </li>
    );
  }
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsItem;
