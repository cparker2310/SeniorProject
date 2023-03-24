import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import JobCard from '../components/CareerCenter/Jobs/JobCard';
import { GiTrashCan } from 'react-icons/gi';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

describe('Individual job posting', () => {
  const job= {
    title: 'Cyber Security Intern',
    companyName: 'National Security Agency',
    categories: ['STEM'],
    type: 'Internship',
    location: 'Fort Mead, MD',
  };

  it('should render job posting correctly', () => {
    const { getByText }= render(<JobCard props={job} />);
    expect(getByText('Cyber Security Intern')).toBeInTheDocument();
    expect(getByText('National Security Agency')).toBeInTheDocument();
    expect(getByText('STEM')).toBeInTheDocument();
    expect(getByText('Internship')).toBeInTheDocument();
    expect(getByText('Fort Mead, MD')).toBeInTheDocument();
  });

  it('should render delete job correctly', () => {
    const handleDelete= jest.fn();
    const { getByRole }= render(<JobCard props={{ ...job, handleDelete }} />);
    fireEvent.click(getByRole('button', { name: <GiTrashCan />}));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

});
