import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { handleAddToList, exercise } = props;
  const { name, age, time, picture, about } = exercise;
  return (
    <div className="exercise">
      <img src={picture} alt="" />
      <div className="exercise-info">
        <h4>{name}</h4>
        <small>{about}</small>
        <p>For Age:{age}</p>
        <p>Time Required: {time}s</p>
      </div>
      <button onClick={() => handleAddToList(exercise)}>Add To List</button>
    </div>
  );
};

export default Exercise;
