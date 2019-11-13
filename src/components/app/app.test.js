import React from 'react';
import renderer from 'react-test-renderer';

import App from "./app";
import {getTestCard} from "../../mocks/get-test-card";
import {leaflet} from "../../mocks/leaflet";

it(`App correctly renders after relaunch`, () => {
  const offers = [getTestCard(`Amsterdam`, 6723, true)];
  const nearbyOffers = [getTestCard(`Amsterdam`, 555, false)];

  const tree = renderer.create(<App
    offers = {offers}
    leaflet = {leaflet}
    nearbyOffers={nearbyOffers}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
