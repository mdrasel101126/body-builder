import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import Exercise from "../Exercise/Exercise";
import "./Main.css";

const Main = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);
  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToList = (exercise) => {
    setExerciseTime(exerciseTime + exercise.time);
  };
  return (
    <div className="main-container">
      <div className="exercise-container">
        <h3>Best Exercise For You Today</h3>
        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise._id}
              handleAddToList={handleAddToList}
              exercise={exercise}
            ></Exercise>
          ))}
        </div>
      </div>
      <Developer exerciseTime={exerciseTime}></Developer>
    </div>
  );
};

export default Main;
