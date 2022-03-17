import React from 'react';
import { render, screen } from '@testing-library/react';
import Forecast from './Forecast';

test('renders learn react link', () => {
  render(<Forecast dayOfWeek="123" maxTemp={35} minTemp={32} weatherStateAbbr="ln" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
