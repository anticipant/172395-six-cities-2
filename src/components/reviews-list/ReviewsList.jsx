import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from "../reviews-item/ReviewsItem";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="reviews__list">
        {
          this.props.children.map((it) => <ReviewsItem key={it.id} review={it}/>)
        }
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewsList;
