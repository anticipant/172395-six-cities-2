import React from 'react';
import renderer from 'react-test-renderer';

import {getTestCard} from "../../mocks/get-test-card";
import {leaflet} from "../../mocks/leaflet";
import MainPage from "./main-page";
import Map from "../map/map";

it(`MainPage correctly renders after relaunch`, () => {
  const offers = [getTestCard(`MainPage`, 999, false)];

  const tree = renderer.create(<MainPage
    cards={offers}
    onCardClick={() => {}}
    name={`Amsterdam`}
  >
    <Map name={`MainPage`} offers={offers} leaflet={leaflet}/>
  </MainPage>).toJSON();
  expect(tree).toMatchSnapshot();
});
