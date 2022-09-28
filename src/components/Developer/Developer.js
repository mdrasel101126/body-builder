import React, { useState } from "react";
import "./Developer.css";
import devImage from "../../images/developer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const Developer = (props) => {
  const [breakTime, setBreakTime] = useState(0);
  const exerciseTime = props.exerciseTime;
  const handleBreakTime = () => {};
  return (
    <div className="developer-container">
      <div className="developer-info">
        <img src={devImage} alt="" />
        <div className="developer-name">
          <h4>Rasel Miah</h4>
          <p>
            <small>
              <FontAwesomeIcon icon={faLocationPin} /> Sylhet,Bangladesh
            </small>
          </p>
        </div>
      </div>
      <div className="developer-bio">
        <div>
          <p>
            70{" "}
            <span>
              <small>kg</small>
            </span>
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p>
            5.4
            <span>
              <small>ft</small>
            </span>
          </p>
          <p>Height</p>
        </div>
        <div>
          <p>
            25
            <span>
              <small>yrs</small>
            </span>
          </p>
          <p>Age</p>
        </div>
      </div>
      <h3>Add A Break</h3>
      <div className="add-break">
        <p>
          <span>10</span>
          <span>s</span>
        </p>
        <p>
          <span>20</span>
          <span>s</span>
        </p>
        <p>
          <span>30</span>
          <span>s</span>
        </p>
        <p>
          <span>40</span>
          <span>s</span>
        </p>
        <p>
          <span>50</span>
          <span>s</span>
        </p>
      </div>
      <h3>Exercise Details</h3>
      <div className="exercise-time">
        <p>Exercise Time</p>
        <p>{exerciseTime}sec</p>
      </div>
      <div className="break-time">
        <p>Break Time</p>
        <p>{breakTime}sec</p>
      </div>
      <button>Activity Completed</button>
    </div>
  );
};

export default Developer;
