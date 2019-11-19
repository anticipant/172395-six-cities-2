import {Provider} from "react-redux";
import React from 'react';
import renderer from 'react-test-renderer';

import App from "./app";
import {getTestCard} from "../../mocks/get-test-card";
import {leafletMock as leaflet} from "../../mocks/leaflet";
import store from "../../store/store";

it(`App correctly renders after relaunch`, () => {
  const offers = [getTestCard(`Amsterdam`, 6723, true)];
  const nearbyOffers = [getTestCard(`Amsterdam`, 555, false)];

  const tree = renderer.create(<Provider store={store}><App
    offers = {offers}
    leaflet = {leaflet}
    nearbyOffers={nearbyOffers}
  /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
