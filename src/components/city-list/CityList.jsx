import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  cityClickHandler(evt) {
    const cityName = evt.currentTarget.querySelector(`span`).innerHTML;
    this.props.selectCity(cityName);
  }

  render() {
    const {cities, name} = this.props;
    return cities.map((it) => {
      return (
        <li
          key={`${it}`}
          onClick={this.cityClickHandler}
          className="locations__item"
        >
          <a className={`locations__item-link tabs__item ${name === it ? `tabs__item--active` : ``}`} href="#">
            <span>{it}</span>
          </a>
        </li>
      );
    });
  }
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  selectCity: PropTypes.func.isRequired,
};

export default CityList;
