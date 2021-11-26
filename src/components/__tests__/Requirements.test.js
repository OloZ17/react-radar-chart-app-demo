import React from 'react';
import { render } from '@testing-library/react';
import { Requirements } from '../index';

describe('Requirements() Component', () => {
  const skills = [
    'Thing 1',
    'Thing 2',
    'Thing 3',
    'Thing 4',
    'Thing 5',
    'Thing 6',
  ];

  const requirements = [1, 2, 3, 4, 5, 6];

  const handleChangeRequirement = jest.fn();
  const resetRequirement = jest.fn();

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Requirements
        skills={skills}
        requirements={requirements}
        handleChangeRequirement={handleChangeRequirement}
        resetRequirement={resetRequirement}
      />
    );
    expect(asFragment(<Requirements />)).toMatchSnapshot();
  });
});
