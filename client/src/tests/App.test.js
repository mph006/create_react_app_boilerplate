import React from 'react'
import { render, screen } from '@testing-library/react';
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
//Must wrap data dependent components with the queryClient 
import { QueryClient, QueryClientProvider} from "react-query";

import App from '../App';
import TableExample from '../pages/TableExample';
import { getFakeData } from '../api/api'
import { decoratePhoneNumber } from '../components/PhoneNumberInput'

const queryClient = new QueryClient();


test('<Home/> (render): Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText("Home Route: Hello World");
  expect(linkElement).toBeInTheDocument();
});

test('<TableExample/> (render): Row Picker', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <TableExample />
    </QueryClientProvider>);

  const linkElement = screen.getByText("Number of Rows:");
  expect(linkElement).toBeInTheDocument();
});

test('<MockDataTable/> (api): Data Fetch', async () => {
  const data = await getFakeData(10)
  expect(data.length).toBeGreaterThan(0)
  expect(data[0].name !== undefined).toBe(true)
});

test('<PhoneComponent/> (function): Test Phone Format', async () => {
  const test1 = decoratePhoneNumber('323305')
  expect(test1.indexOf('(') === 0).toBe(true)
});
