import React from 'react';
import { func, array } from 'prop-types';

const Requirements = (props) => {
  const { skills, requirements, handleChangeRequirement, resetRequirement } =
    props;
  return (
    <div className="col-md-6">
      <h3>Requirements</h3>
      {requirements.map((requirement, index) => (
        <div className="form-inline form-group mb-2" key={index}>
          <label>{skills[index]}</label>
          <input
            name="requirement"
            value={requirement || 0}
            type="number"
            onChange={(e) => handleChangeRequirement(index, e)}
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
            onClick={() => resetRequirement(index)}
          >
            Reset
          </button>
        </div>
      ))}
    </div>
  );
};

Requirements.propTypes = {
  skills: array,
  requirements: array,
  handleChangeRequirement: func,
  resetRequirement: func,
};

export default Requirements;
