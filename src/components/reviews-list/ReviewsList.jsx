import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ReviewsList extends PureComponent {
  render() {
    return (
      <ul className="reviews__list">
        {this.props.children}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  children: PropTypes.element,
};

export default ReviewsList;
