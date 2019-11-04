import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./OfferCard";

Enzyme.configure({adapter: new Adapter()});

describe(`what handler return`, () => {
  it(`simulates click events`, () => {

    const offer = {
      id: 444,
      title: `e2e 1`,
      isPremium: true,
      previewImage: `img/apartment-01.jpg`,
      price: 44,
      rating: 44,
      type: `44`,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: false,
      bedrooms: 322,
      maxAdults: 412,
      goods: [`12Heating`, `1Kitch2en`, `1Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        id: 4,
        isPro: true,
        name: `Angelina123`,
        avatarUrl: `img/1.png`
      },
      description: `2222 quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
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
      title: `e2e 1`,
      isPremium: false,
      previewImage: `img/apartment-01.jpg`,
      price: 55,
      rating: 5,
      type: `5`,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: false,
      bedrooms: 3,
      maxAdults: 4,
      goods: [`555`, `1Kitchen`, `1Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        id: 3,
        isPro: true,
        name: `Angelina`,
        avatarUrl: `img/1.png`
      },
      description: `55 quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
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
