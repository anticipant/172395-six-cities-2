import React from 'react';
import renderer from 'react-test-renderer';

import {getTestCard} from "../../mocks/get-test-card";
import {leafletMock as leaflet} from "../../mocks/leaflet";
import Map from "./map";

it(`Map correctly renders after relaunch`, () => {
  const offers = [getTestCard(`Map snapshot`, 888, true)];

  const tree = renderer.create(<Map name={`Amsterdam`} offers={offers} leaflet={leaflet}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
