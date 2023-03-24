import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterJob from '../components/CareerCenter/Search/index';

test('Filter Job button renders correctly', () => {
  const filterJobsMock= jest.fn();
  const { getByRole }= render(<FilterJob filterJobs={filterJobsMock} />);

  const filterButton= getByRole('button');

  expect(filterButton).toBeInTheDocument();

  fireEvent.click(filterButton);
  expect(filterJobsMock).toHaveBeenCalledTimes(1);
});
