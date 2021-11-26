import React from 'react';
import { func, array } from 'prop-types';

const Achievements = (props) => {
  const { skills, achievements, handleChangeAchievement, resetAchievement } =
    props;

  return (
    <div className="col-md-6">
      <h3>Achievements</h3>
      {achievements.map((achievements, index) => (
        <div className="form-inline form-group mb-2" key={index}>
          <label>{skills[index]}</label>
          <input
            name="requirement"
            value={achievements || 0}
            type="number"
            onChange={(e) => handleChangeAchievement(index, e)}
            style={{
              padding: 2,
              width: 50,
              textAlign: 'center',
              marginRight: 5,
              marginLeft: 5,
            }}
          />

          <button
            type="button"
            className="btn btn-warning"
            onClick={() => resetAchievement(index)}
          >
            Reset
          </button>
        </div>
      ))}
    </div>
  );
};

Achievements.propTypes = {
    skills: array,
    achievements: array,
    handleChangeAchievement: func,
    resetAchievement: func,
  };

export default Achievements;
