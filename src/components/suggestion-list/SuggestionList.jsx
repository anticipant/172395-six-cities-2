import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/OfferCard";
import Header from "../header/Header";

class SuggestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 1,
    };
    this.hoverCardHandler = this.hoverCardHandler.bind(this);
  }

  hoverCardHandler(card) {
    if (this.state.activeCard !== card.id) {
      this.setState({
        activeCard: card.id,
      });
    }
  }

  render() {
    const {cards} = this.props;
    return (
      <div className="page page--gray page--main">
        <Header isMainPage={true}/>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active">
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption"
                  >Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
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

                  {cards.map((it) => <OfferCard
                    key = {it.id}
                    card = {it}
                    onHover = {this.hoverCardHandler}
                    onCardClick = {this.props.onCardClick}
                  />)}

                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

SuggestionList.propTypes = {
  cards: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default SuggestionList;
