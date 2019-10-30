import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

it(`simulates click events`, () => {

  const offers = [{
    id: 444,
    name: `e2e 1`,
    mark: `Premium`,
    image: `img/apartment-01.jpg`,
    price: 44,
    rating: 44,
    type: `44`
  }];
  const handler = jest.fn();
  const tree = mount(<App
    offers = {offers}
  />);
  const btn = tree.find(`.places__sorting-caption`);
  btn.simulate(`click`);
  expect(handler).toHaveBeenCalledTimes(1);

});
