import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  const setup = () => {
    const utils = render(
      <Achievements
        skills={skills}
        achievements={achievements}
        handleChangeAchievement={handleChangeAchievement}
        resetAchievement={resetAchievement}
      />
    );
    const inputs = screen.getAllByTestId('achievement-input');
    const buttons = screen.getAllByTestId('resetAchievement-button');
    return {
      inputs,
      buttons,
      ...utils,
    };
  };

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

  it('should handleChange', () => {
    const { inputs } = setup();
    expect(inputs.length).toBe(6);
    expect(inputs[0]).toHaveValue(1);
    fireEvent.change(inputs[0], { target: { value: 2 } });
    expect(handleChangeAchievement).toBeCalled();
  });

  it('should click', () => {
    const { buttons } = setup();
    fireEvent.click(buttons[0]);
    expect(resetAchievement).toBeCalled();
  });
});
