import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard.js';

// Test away
test('Dashboard renders correctly', () => {
  render (<Dashboard />)
})

// test('it checks that it cannot be closed when locked', () => {
//   const defaultDashboard = ;

//   // toggleLocked();
//   render (
//     <Dashboard 
    
//     />
//   )
// })