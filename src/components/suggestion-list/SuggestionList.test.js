import React from 'react';
import SuggestionList from "./SuggestionList";
import renderer from 'react-test-renderer';

it(`SuggestionList correctly renders after relaunch`, () => {
  const offers = [{
    id: 2,
    name: `Beautiful & luxurious apartment at great location`,
    mark: `Premium2`,
    image: `img/apartment-02.jpg`,
    price: 133,
    rating: 13,
    type: `Apartment 2`
  }];
  const tree = renderer.create(<SuggestionList
    cards={offers}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
