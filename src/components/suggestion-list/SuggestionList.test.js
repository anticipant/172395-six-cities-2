import React from 'react';
import SuggestionList from "./SuggestionList";
import renderer from 'react-test-renderer';
import Map from "../map/Map";
import {leaflet} from "../../mocks/leaflet";
import {getTestCard} from "../../mocks/get-test-card";

it(`SuggestionList correctly renders after relaunch`, () => {
  const offers = [getTestCard(`SuggestionList`, 543, false)];

  const tree = renderer.create(<SuggestionList
    cards={offers}
    onCardClick={() => {}}
  >
    <Map name={`SuggestionList`} offers={offers} leaflet={leaflet}/>
  </SuggestionList>).toJSON();
  expect(tree).toMatchSnapshot();
});
