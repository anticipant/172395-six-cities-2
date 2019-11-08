import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./Map";
import {leaflet} from "../../mocks/leaflet";
import {getTestCard} from "../../mocks/get-test-card";

it(`Map correctly renders after relaunch`, () => {
  const offers = [getTestCard(`Map snapshot`, 888, true)];

  const tree = renderer.create(<Map name={`Map snapshot`} offers={offers} leaflet={leaflet}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
