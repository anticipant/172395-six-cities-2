import React from 'react';
import App from "./App";
import renderer from 'react-test-renderer';

it(`App correctly renders after relaunch`, () => {
  const offers = [{
    id: 99,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 33,
        longitude: 33,
        zoom: 33
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
      latitude: 333222,
      longitude: 3322,
      zoom: 33322
    },

  }];
  const leaflet = {
    icon: () => {},
    map: () => ({
      setView: () => {},
      addTo: () => {},
    }),
    tileLayer: () => ({
      addTo: () => {},
    }),
    marker: () => ({
      addTo: () => {},
    }),

  };
  const tree = renderer.create(<App
    offers = {offers}
    leaflet = {leaflet}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
