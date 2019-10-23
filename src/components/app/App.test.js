import React from 'react';
import App from "./App";
import renderer from 'react-test-renderer';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App settings={{
    cards: [`bla`, `boom`],
    onClickHandler: () => {},
  }}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
