import React, { useState } from 'react';
import './App.css';
import { Skills, Requirements, Achievements, RadarChart } from './components';

const App = () => {
  const [skills, setSkills] = useState([
    'Thing 1',
    'Thing 2',
    'Thing 3',
    'Thing 4',
    'Thing 5',
    'Thing 6',
  ]);

  const [requirements, setRequirements] = useState([2, 9, 3, 5, 2, 3]);

  const [achievements, setAchievements] = useState([4, 8, 3, 4, 6, 9]);

  const handleChangeSkills = (index, e) => {
    e.preventDefault();
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
    const newRequirements = [...requirements];
    newRequirements.splice(index, 1);
    setRequirements(newRequirements);
    const newAchievements = [...achievements];
    newAchievements.splice(index, 1);
    setAchievements(newAchievements);
  };

  const addSkill = () => {
    setSkills([...skills, 'DEFAULT']);
    setRequirements([...requirements, 0]);
    setAchievements([...achievements, 0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(skills));
  };

  const handleChangeRequirement = (index, e) => {
    e.preventDefault();
    const newRequirements = [...requirements];
    newRequirements[index] = e.target.value;
    setRequirements(newRequirements);
  };

  const resetRequirement = (index) => {
    const newRequirements = [...requirements];
    newRequirements[index] = 0;
    setRequirements(newRequirements);
  };

  const handleChangeAchievement = (index, e) => {
    e.preventDefault();
    const newAchievementss = [...achievements];
    newAchievementss[index] = e.target.value;
    setAchievements(newAchievementss);
  };

  const resetAchievement = (index) => {
    const newAchievements = [...achievements];
    newAchievements[index] = 0;
    setAchievements(newAchievements);
  };

  const data = {
    labels: skills,
    datasets: [
      {
        label: 'Requirements',
        data: requirements,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Achievements',
        data: achievements,
        backgroundColor: 'rgba(12, 8, 255, 0.2)',
        borderColor: 'rgba(12, 8, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <Skills
                skills={skills}
                handleChangeSkills={handleChangeSkills}
                addSkill={addSkill}
                removeSkill={removeSkill}
              />
              <div className="row">
                <Requirements
                  skills={skills}
                  requirements={requirements}
                  handleChangeRequirement={handleChangeRequirement}
                  resetRequirement={resetRequirement}
                />
                <Achievements
                  skills={skills}
                  achievements={achievements}
                  handleChangeAchievement={handleChangeAchievement}
                  resetAchievement={resetAchievement}
                />
              </div>
              <div className="button-section">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <RadarChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
