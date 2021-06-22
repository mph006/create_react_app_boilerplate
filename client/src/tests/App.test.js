import React from 'react'
import { render, screen } from '@testing-library/react';
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import App from '../components/App';
import { getFakeData } from '../api/api'

test('<App/> (render): Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText("Hello World");
  expect(linkElement).toBeInTheDocument();
});

test('<App/> (render): Row Picker', () => {
  render(<App />);
  const linkElement = screen.getByText("Number of Rows:");
  expect(linkElement).toBeInTheDocument();
});

test('<MockDataTable/> (api)', async () => {
  const data = await getFakeData('testing',10)
  expect(data.length).toBeGreaterThan(0)
  expect(data[0].name !== undefined).toBe(true)
});
