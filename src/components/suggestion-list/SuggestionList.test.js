import React from 'react';
import SuggestionList from "./SuggestionList";
import renderer from 'react-test-renderer';
import Map from "../map/Map";

it(`SuggestionList correctly renders after relaunch`, () => {
  const offers = [{
    id: 565,
    city: {
      name: `Amsterdam2`,
      location: {
        latitude: 12123123,
        longitude: 1111,
        zoom: 1220
      }
    },
    title: `lorem imp`,
    isPremium: true,
    previewImage: `img/apartment-0555.jpg`,
    price: 331232133,
    rating: 123213,
    type: `Apartment 31232132`,
    images: [`img/apartment-021.jpg`, `img/apartment-022.jpg`],
    isFavorite: false,
    bedrooms: 13,
    maxAdults: 14,
    goods: [`2Heating`, `1Kitchen`, `1Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 2,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `img/12.png`
    },
    description: `22111A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 111111111,
      longitude: 22222,
      zoom: 3333
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
  const tree = renderer.create(<SuggestionList
    cards={offers}
    onCardClick={() => {}}
  >
    <Map name={`Amsterdam2`} offers={offers} leaflet={leaflet}/>
  </SuggestionList>).toJSON();
  expect(tree).toMatchSnapshot();
});
