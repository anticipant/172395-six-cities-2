import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./Map";

it(`App correctly renders after relaunch`, () => {
  const offers = [{
    id: 99,
    city: {
      name: `Amsterdam12`,
      location: {
        latitude: 52.111,
        longitude: 4.911111,
        zoom: 111110
      }
    },
    title: `123 123 123`,
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
    location: {
      latitude: 52.11111,
      longitude: 4.11111,
      zoom: 22222
    },

  }];
  const tree = renderer.create(<Map name={`Amsterdam12`} offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
