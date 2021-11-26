import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  const setup = () => {
    const utils = render(
      <Requirements
        skills={skills}
        requirements={requirements}
        handleChangeRequirement={handleChangeRequirement}
        resetRequirement={resetRequirement}
      />
    );
    const inputs = screen.getAllByTestId('requirement-input');
    const buttons = screen.getAllByTestId('resetRequirement-button');
    return {
      inputs,
      buttons,
      ...utils,
    };
  };

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

  it('should handleChange', () => {
    const { inputs } = setup();
    expect(inputs.length).toBe(6);
    expect(inputs[0]).toHaveValue(1);
    fireEvent.change(inputs[0], { target: { value: 2 } });
    expect(handleChangeRequirement).toBeCalled();
  });

  it('should click', () => {
    const { buttons } = setup();
    fireEvent.click(buttons[0]);
    expect(resetRequirement).toBeCalled();
  });
});
