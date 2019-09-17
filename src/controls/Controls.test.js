import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Controls from './Controls.js';


// Test away!

test('Display renders correctly', () => {
  render(<Controls />)
})

test('Buttons rendering properly', () => {
  const { getByText } = render(<Controls />)
  getByText(/close gate/i);
  getByText(/lock gate/i);
})

test('Button text for Gate Closed and Gate Locked', () => {
  const { getByText } = render(<Controls closed={true} locked={true}/>)
  getByText(/unlock gate/i)
  getByText(/open gate/i)
})

test('Button text for Gate Open and Gate open', () => {
  const { getByText } = render(<Controls open={true} unlocked={true}/>)
  getByText(/lock gate/i)
  getByText(/close gate/i)
})

test('Closed toggle button disabled if gate locked', () => {
  const {queryByText} = render(<Controls closed={true} locked={true}/>)
  const closedButton = queryByText(/open gate/i)
  expect(closedButton).toHaveAttribute('disabled')
 
})