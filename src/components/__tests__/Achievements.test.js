import React from 'react';
import { render } from '@testing-library/react';
import { Achievements } from '../index';

describe('Achievements() Component', () => {
  const skills = [
    'Thing 1',
    'Thing 2',
    'Thing 3',
    'Thing 4',
    'Thing 5',
    'Thing 6',
  ];

  const achievements = [1, 2, 3, 4, 5, 6];

  const handleChangeAchievement = jest.fn();
  const resetAchievement = jest.fn();

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Achievements
        skills={skills}
        achievements={achievements}
        handleChangeAchievement={handleChangeAchievement}
        resetAchievement={resetAchievement}
      />
    );
    expect(asFragment(<Achievements />)).toMatchSnapshot();
  });
});
