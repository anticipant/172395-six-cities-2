import React from 'react';
import MainPage from "./main-page";
import renderer from 'react-test-renderer';
import Map from "../map/map";
import {leaflet} from "../../mocks/leaflet";
import {getTestCard} from "../../mocks/get-test-card";

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
