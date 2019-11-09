import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ReviewsList extends PureComponent {
  render() {
    const {reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviews.map((it) => it)}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsList;
