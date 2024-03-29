import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {getTestCard} from "../../mocks/get-test-card";
import OfferCard from "./offer-card";

Enzyme.configure({adapter: new Adapter()});

describe(`what handler return`, () => {

  it(`simulates mouseover events`, () => {
    const offer = getTestCard(`simulates mouseover`, 555666, false);
    const handler = jest.fn((it) => it);
    const tree = mount(<OfferCard
      card = { offer }
      key = { offer.id }
      onHover = { handler }
      onCardClick = { () => {} }
      blockClassName={`cities`}
    />);
    const card = tree.find(`.cities__place-card`);
    card.simulate(`mouseover`);
    expect(handler).toHaveReturnedWith(offer);

  });

  it(`simulates click events`, () => {
    const offer = getTestCard(`simulates click`, 2000, true);
    const handler = jest.fn((it) => it);
    const tree = mount(<OfferCard
      card = { offer }
      key = { offer.id }
      onHover = { handler }
      onCardClick = { handler }
      blockClassName={`xxx`}
    />);
    const title = tree.find(`.place-card__name a`);
    title.simulate(`click`);
    expect(handler).toHaveReturnedWith(offer);

  });
});
