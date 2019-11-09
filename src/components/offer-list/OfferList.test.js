import React from 'react';
import OfferList from "./OfferList";
import renderer from 'react-test-renderer';
import Map from "../map/Map";
import {leaflet} from "../../mocks/leaflet";
import {getTestCard} from "../../mocks/get-test-card";

it(`OfferList correctly renders after relaunch`, () => {
  const offers = [getTestCard(`OfferList`, 543, false)];

  const tree = renderer.create(<OfferList
    cards={offers}
    onCardClick={() => {}}
  >
    <Map name={`OfferList`} offers={offers} leaflet={leaflet}/>
  </OfferList>).toJSON();
  expect(tree).toMatchSnapshot();
});
