import React from 'react';
import { render } from '@testing-library/react';
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
});
