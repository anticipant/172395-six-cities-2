import React from 'react';
import renderer from 'react-test-renderer';

import {getTestReview} from "../../mocks/get-test-review";
import ReviewsItem from "./reviews-item";

it(`ReviewsItem correctly renders after relaunch`, () => {
  const review = getTestReview(`ReviewsItem`, 546, true);
  const tree = renderer.create(<ReviewsItem
    key = {review.id}
    review={review}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
