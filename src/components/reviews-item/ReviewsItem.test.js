import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from "./ReviewsItem";
import {getTestReview} from "../../mocks/get-test-review";

it(`ReviewsItem correctly renders after relaunch`, () => {
  const review = getTestReview(`ReviewsItem`, 546, true);
  const tree = renderer.create(<ReviewsItem
    key = {review.id}
    review={review}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
