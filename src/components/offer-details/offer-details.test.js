import React from 'react';
import renderer from 'react-test-renderer';

import {getTestCard} from "../../mocks/get-test-card";
import {leaflet} from "../../mocks/leaflet";
import OfferDetails from "./offer-details";

it(`OfferDetails correctly renders after relaunch`, () => {
  const card = getTestCard(`OfferDetails snap 2`, 999, false);
  const nearbyOffers = [1, 2, 3].map((it, index) => {
    return getTestCard(`OfferDetails snap item`, 222 + index, false);
  });
  const tree = renderer.create(<OfferDetails
    card = {card}
    nearbyOffers={nearbyOffers}
    onCardClick={() => {}}
    leaflet = {leaflet}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
