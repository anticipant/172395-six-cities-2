import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./OfferCard";

Enzyme.configure({adapter: new Adapter()});

it(`simulates click events`, () => {

  const offer = {
    id: 444,
    name: `e2e 1`,
    mark: `Premium`,
    image: `img/apartment-01.jpg`,
    price: 44,
    rating: 44,
    type: `44`
  };
  const handler = jest.fn((it) => it);
  const tree = mount(<OfferCard
    card = { offer }
    key = { offer.id }
    onHover = { handler }
  />);
  const card = tree.find(`.cities__place-card`);
  card.simulate(`mouseover`);
  expect(handler).toHaveReturnedWith(offer);

});
