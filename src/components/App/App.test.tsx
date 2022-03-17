import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const defaultProps = {
    isFetching: false,
    isFetched: false,
    isError: false,
    woeid: "",
    query: "",
    errorMessage: "",
    woeLocations: [],
  }
  render(<App {...defaultProps} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
