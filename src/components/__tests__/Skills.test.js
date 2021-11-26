import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Skills } from '../index';

describe('Testing Skills() Component', () => {
  const skills = [
    'Thing 1',
    'Thing 2',
    'Thing 3',
    'Thing 4',
    'Thing 5',
    'Thing 6',
  ];

  const handleChangeSkills = jest.fn();
  const addSkill = jest.fn();
  const removeSkill = jest.fn();

  const setup = () => {
    const utils = render(
      <Skills
        skills={skills}
        handleChangeSkills={handleChangeSkills}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />
    );
    const inputs = screen.getAllByRole('textbox');
    const remove_buttons = screen.getAllByTestId('removeSkill-button');
    const add_buttons = screen.getAllByTestId('addSkill-button');

    return {
      inputs,
      remove_buttons,
      add_buttons,
      ...utils,
    };
  };

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Skills
        skills={skills}
        handleChangeSkills={handleChangeSkills}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />
    );
    expect(asFragment(<Skills />)).toMatchSnapshot();
  });

  it('should handleChange', () => {
    const { inputs } = setup();
    expect(inputs.length).toBe(6);
    expect(inputs[0]).toHaveValue('Thing 1');
    fireEvent.change(inputs[0], { target: { value: 'Test' } });
    expect(handleChangeSkills).toBeCalled();
  });

  it('should click', () => {
    const { remove_buttons, add_buttons } = setup();
    fireEvent.click(remove_buttons[0]);
    fireEvent.click(add_buttons[0]);
    expect(addSkill).toBeCalled();
    expect(removeSkill).toBeCalled();
  });
});
