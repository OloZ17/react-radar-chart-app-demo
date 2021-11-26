import React from 'react';
import { func, array } from 'prop-types';

const Skills = (props) => {
  const { skills, handleChangeSkills, addSkill, removeSkill } = props;

  return (
    <div className="row">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div className="form-inline form-group mb-2" key={index}>
          <label>Skill {index + 1}</label>
          <input
            name="skill"
            value={skill || ''}
            type="text"
            onChange={(e) => handleChangeSkills(index, e)}
            style={{
              padding: 2,
              textAlign: 'left',
              marginRight: 5,
              marginLeft: 5,
            }}
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeSkill(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="button-section">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => addSkill()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: array,
  handleChangeSkills: func,
  addSkill: func,
  removeSkill: func,
};

export default Skills;
