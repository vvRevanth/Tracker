// src/components/ActivityLog.js
import React, { useState, useEffect } from 'react';

function ActivityLog() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from the backend (use a mock for now)
    setActivities([
      { id: 1, name: 'Running', duration: '30 mins', calories: 300 },
      { id: 2, name: 'Cycling', duration: '45 mins', calories: 400 },
    ]);
  }, []);

  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name} - {activity.duration} - {activity.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLog;
