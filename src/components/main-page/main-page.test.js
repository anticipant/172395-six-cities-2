import React from 'react';
import renderer from 'react-test-renderer';

import {getTestCard} from "../../mocks/get-test-card";
import {leafletMock as leaflet} from "../../mocks/leaflet";
import {MainPage} from "./main-page";

it(`MainPage correctly renders after relaunch`, () => {
  const offers = [getTestCard(`MainPage`, 999, false)];

  const tree = renderer.create(<MainPage
    cards={offers}
    cities={[`Amsterdam`]}
    onCardClick={() => {}}
    name={`Amsterdam`}
    leaflet={leaflet}
    selectCity={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
