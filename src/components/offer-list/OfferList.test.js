import React from 'react';
import OfferList from "./OfferList";
import renderer from 'react-test-renderer';
import {getTestCard} from "../../mocks/get-test-card";

it(`OfferList correctly renders after relaunch`, () => {
  const offers = [getTestCard(`OfferList`, 543, false)];

  const tree = renderer.create(<OfferList
    cards={offers}
    onCardClick={() => {}}
    blockClassName={`near-places`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
