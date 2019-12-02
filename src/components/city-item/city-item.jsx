import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CityItem extends PureComponent {

  constructor(props) {
    super(props);
    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  cityClickHandler(evt) {
    const cityName = evt.currentTarget.querySelector(`span`).innerHTML;
    this.props.onItemClick(cityName);
  }

  render() {
    return (
      <li
        onClick={this.cityClickHandler}
        className="locations__item"
      >
        <a className={`locations__item-link tabs__item ${this.props.activeCity === this.props.item.name ? `tabs__item--active` : ``}`} href="#">
          <span>{this.props.item.name}</span>
        </a>
      </li>
    );
  }
}

CityItem.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number
    ]),
    name: PropTypes.string,
  })),
  onItemClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

CityItem.propTypes = {};

export default CityItem;
