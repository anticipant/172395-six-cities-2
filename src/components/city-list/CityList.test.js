import React from 'react';
import renderer from 'react-test-renderer';

import CityList from "./CityList";

it(`CityList correctly renders after relaunch`, () => {
  const tree = renderer.create(<CityList
    cities={[`minsk`]}
    name={`minsk`}
    selectCity={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
