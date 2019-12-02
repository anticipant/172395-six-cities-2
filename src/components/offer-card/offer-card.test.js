import React from 'react';
import renderer from 'react-test-renderer';

import {getTestCard} from "../../mocks/get-test-card";
import OfferCard from "./offer-card";

it(`OfferCard correctly renders after relaunch`, () => {
  const card = getTestCard(`OfferCard`, 123321123321, true);
  const tree = renderer.create(<OfferCard
    item = {card}
    onItemClick = {() => {}}
    blockClassName={`near-places`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
