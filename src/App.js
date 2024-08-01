import React from 'react';
import ActivityLog from './components/ActivityLog';
// import MealLog from './components/MealLog';
import ProgressChart from './components/ProgressCharts';
import GoalSetting from './components/GoalSetting';
import Community from './components/Community';  // Correct Import
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fitness and Nutrition Tracker</h1>
      </header>
      <main>
        <ActivityLog />
        {/* <MealLog /> */}
        <ProgressChart />
        <GoalSetting />
        <Community />
      </main>
    </div>
  );
}

export default App;
