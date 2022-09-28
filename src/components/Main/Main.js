import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import Exercise from "../Exercise/Exercise";
import "./Main.css";

const Main = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <div className="main-container">
      <div className="exercise-container">
        <h3>Best Exercise For You Today</h3>
        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <Exercise key={exercise._id} exercise={exercise}></Exercise>
          ))}
        </div>
      </div>
      <Developer></Developer>
    </div>
  );
};

export default Main;
