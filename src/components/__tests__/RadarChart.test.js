import React from 'react';
import { render } from '@testing-library/react';
import { RadarChart } from '../index';

describe('Requirements() Component', () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    delete window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
  });

  const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: 'Requirements',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Achievements',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(12, 8, 255, 0.2)',
        borderColor: 'rgba(12, 8, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  it('should take a snapshot', () => {
    const { asFragment } = render(<RadarChart data={data} />);
    expect(asFragment(<RadarChart />)).toMatchSnapshot();
  });
});
