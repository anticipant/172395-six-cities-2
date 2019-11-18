import {connect} from "react-redux";
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Header from "../header/header";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import {selectCityAction} from "../../actions/select-city-action";
import {setOffersListAction} from "../../actions/set-offers-list-action";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.cityClickHandler = this.cityClickHandler.bind(this);
    this.cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  }

  cityClickHandler(evt) {
    const cityName = evt.currentTarget.querySelector(`span`).innerHTML;
    this.props.selectCity(cityName);
  }

  render() {
    const {cards, name, onCardClick, leaflet} = this.props;

    return (
      <div className="page page--gray page--main">
        <Header isMainPage={true}/>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                {
                  this.cities.map((it) => {

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
                  })
                }
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cards.length} places to stay in {name}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption"
                  >Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">

                  <OfferList
                    blockClassName={`cities`}
                    cards = {cards}
                    onCardClick = {onCardClick}
                  />

                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  name = {name}
                  offers = {cards}
                  leaflet = {leaflet}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  leaflet: PropTypes.object,
  selectCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.offersList,
  name: state.activeCity,
});


const mapDispatchToProps = (dispatch) => {
  return {
    selectCity: (cityName) => {
      dispatch(setOffersListAction(cityName));
      dispatch(selectCityAction(cityName));
    },
  };
};

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
