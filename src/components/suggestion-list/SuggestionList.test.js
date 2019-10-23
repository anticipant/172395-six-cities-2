import React from 'react';
import SuggestionList from "./SuggestionList";
import renderer from 'react-test-renderer';

it(`SuggestionList correctly renders after relaunch`, () => {
  const tree = renderer.create(<SuggestionList
    cards={[`one`, `two`]}
    onClickHandler={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
