import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./OfferCard";

Enzyme.configure({adapter: new Adapter()});

describe(`what handler return`, () => {
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
      onCardClick = { () => {} }
    />);
    const card = tree.find(`.cities__place-card`);
    card.simulate(`mouseover`);
    expect(handler).toHaveReturnedWith(offer);

  });

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
      onCardClick = { handler }
    />);
    const title = tree.find(`.place-card__name`);
    title.simulate(`click`);
    expect(handler).toHaveReturnedWith(offer);

  });
});
