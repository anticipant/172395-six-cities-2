import React from 'react';
import OfferCard from "./OfferCard";
import renderer from 'react-test-renderer';

it(`OfferCard correctly renders after relaunch`, () => {
  const card = {
    id: 33,
    title: `bla bla bla`,
    isPremium: true,
    previewImage: `img/apartment-03.jpg`,
    price: 333,
    rating: 33,
    type: `Apartment 3`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    isFavorite: false,
    bedrooms: 3,
    maxAdults: 4,
    goods: [`1Heating`, `1Kitchen`, `1Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `img/1.png`
    },
    description: `111A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

  };
  const tree = renderer.create(<OfferCard
    key = {card.id}
    card = {card}
    onHover = {() => {}}
    onCardClick = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
