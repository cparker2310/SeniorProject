import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditJob from '../components/CareerCenter/Jobs/EditJob/EditJob';

test('Close Edit Job renders correctly', () => {
    const editJobMock= jest.fn();
    const { getByRole }= render(<EditJob editJob={editJobMock} />);
  
    const closeEditJob= getByRole('button');
  
    expect(closeEditJob).toBeInTheDocument();
  
    fireEvent.click(closeEditJob);
    expect(editJobMock).toHaveBeenCalledTimes(1);
});
  
