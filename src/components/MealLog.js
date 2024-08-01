// src/components/MealLog.js
import React, { useState, useEffect } from 'react';

function MealLog() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals from the backend (use a mock for now)
    setMeals([
      { id: 1, name: 'Breakfast', items: 'Oatmeal, Banana', calories: 300 },
      { id: 2, name: 'Lunch', items: 'Chicken Salad', calories: 400 },
    ]);
  }, []);

  return (
    <div>
      <h2>Meal Log</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            {meal.name} - {meal.items} - {meal.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}
// remove this page
export default MealLog;
