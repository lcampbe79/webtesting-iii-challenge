import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display.js';


// Test away!

test('Display renders correctly', () => {
  render(<Display />)
})

test('The app defaults to unlocked and open', () => {
  const { getByText } = render(<Display />)
   getByText(/unlocked/i);
   getByText(/open/i);
})

test('Open and unlocked', () => {
  const { getByText } = render(<Display locked={false} closed={false}/>)
  getByText(/unlocked/i);
  getByText(/open/i);
})

test('Closed and locked', () => {
  const { getByText } = render(<Display locked={true} closed={true}/>)
  getByText(/locked/i);
  getByText(/closed/i);
})