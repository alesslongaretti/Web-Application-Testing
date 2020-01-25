import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { addBalls } from './components/Dashboard';

test('renders without crashing', () => {
  render(<Dashboard />);

});

test("contains Strikes and Balls" , () => {
const container = render(<Dashboard />);
container.getAllByText(/strikes/i);
container.getAllByText(/balls/i);

});

test("buttons container", () => {
  const container = render(<Dashboard />);
  container.getByTestId("buttons-container");

});

test("balls add 1" , () => {
  const currentScore = 1;
  const expected = 2;

  const actual = addBalls(currentScore);

  expect(actual).toBe(expected);

});
