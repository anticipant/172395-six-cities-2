import React from 'react';
import renderer from 'react-test-renderer';

import CityItem from "./city-item";

describe(`how city items render`, () => {

  it(`CityItem correctly renders after relaunch`, () => {
    const cityItem = {id: 111, name: `Moscow 20222`};
    const tree = renderer.create(<CityItem
      item = {cityItem}
      onItemClick = {() => {}}
      activeCity={`Minsk`}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it(`CityItem correctly renders with active city`, () => {
    const cityItem = {id: 564, name: `london`};
    const tree = renderer.create(<CityItem
      item = {cityItem}
      onItemClick = {() => {}}
      activeCity={`london`}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
