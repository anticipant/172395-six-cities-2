import React from 'react';
import renderer from 'react-test-renderer';
import App from "./App";
import {getTestCard} from "../../mocks/get-test-card";
import {leaflet} from "../../mocks/leaflet";

it(`App correctly renders after relaunch`, () => {
  const offers = [getTestCard(`Amsterdam`, 6723, true)];

  const tree = renderer.create(<App
    offers = {offers}
    leaflet = {leaflet}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
