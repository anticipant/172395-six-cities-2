import React from 'react';
import App from "./App";
import renderer from 'react-test-renderer';

it(`App correctly renders after relaunch`, () => {
  const offers = [{
    id: 1,
    name: `Beautiful & luxurious apartment at great location`,
    mark: `Premium`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 93,
    type: `Apartment`
  }];
  const tree = renderer.create(<App
    offers = {offers}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
