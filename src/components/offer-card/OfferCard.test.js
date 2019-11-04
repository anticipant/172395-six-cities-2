import React from 'react';
import OfferCard from "./OfferCard";
import renderer from 'react-test-renderer';

it(`OfferCard correctly renders after relaunch`, () => {
  const card = {
    id: 33,
    name: `bla bla bla`,
    mark: `Premium 33`,
    image: `img/apartment-03.jpg`,
    price: 333,
    rating: 33,
    type: `Apartment 3`
  };
  const tree = renderer.create(<OfferCard
    key = {card.id}
    card = {card}
    onHover = {() => {}}
    onCardClick = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
