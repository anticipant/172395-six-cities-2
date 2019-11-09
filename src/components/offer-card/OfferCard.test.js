import React from 'react';
import OfferCard from "./OfferCard";
import renderer from 'react-test-renderer';
import {getTestCard} from "../../mocks/get-test-card";

it(`OfferCard correctly renders after relaunch`, () => {
  const card = getTestCard(`OfferCard`, 123321123321, true);
  const tree = renderer.create(<OfferCard
    key = {card.id}
    card = {card}
    onHover = {() => {}}
    onCardClick = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
