import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostNewJob from '../components/CareerCenter/Header/index';

test('Post New Job button renders correctly', () => {
  const openNewJobMock= jest.fn();
  const { getByRole }= render(<PostNewJob openNewJob={openNewJobMock} />);

  const postNewJob= getByRole('button');

  expect(postNewJob).toBeInTheDocument();

  fireEvent.click(postNewJob);
  expect(openNewJobMock).toHaveBeenCalledTimes(1);
});
