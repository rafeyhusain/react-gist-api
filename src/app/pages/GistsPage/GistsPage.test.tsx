import React from 'react';
import GistsPage from './GistsPage';
import { Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

test('renders without crash', () => {
  () =>
    render(
      <MemoryRouter>
        <Route path="/" children={<GistsPage />} />
      </MemoryRouter>
    );
});
