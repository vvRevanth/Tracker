// src/components/GoalSetting.js
import React, { useState } from 'react';

function GoalSetting() {
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    // Add a new goal (for simplicity, hard-coded)
    setGoals([...goals, { id: goals.length + 1, description: 'Run 5km daily' }]);
  };

  return (
    <div>
      <h2>Goal Setting</h2>
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {/* goal should be dynamic with potentential of change  */}
        {goals.map((goal) => (
          <li key={goal.id}>{goal.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default GoalSetting;
