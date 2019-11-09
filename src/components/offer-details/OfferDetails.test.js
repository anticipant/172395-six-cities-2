import React from 'react';
import renderer from 'react-test-renderer';
import {getTestCard} from "../../mocks/get-test-card";
import OfferDetails from "./OfferDetails";

it(`OfferDetails correctly renders after relaunch`, () => {
  const card = getTestCard(`OfferDetails snap 2`, 999, false);
  const tree = renderer.create(<OfferDetails card = {card} />).toJSON();
  expect(tree).toMatchSnapshot();
});
