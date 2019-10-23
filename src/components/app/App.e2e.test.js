import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

it(`simulates click events`, () => {

  const handler = jest.fn();
  const tree = mount(<App settings={{
    cards: [`e2e 1`, `e2e 2`],
    onClickHandler: handler,
  }}/>);
  const btn = tree.find(`.places__sorting-caption`);
  btn.simulate(`click`);
  expect(handler).toHaveBeenCalledTimes(1);

});
