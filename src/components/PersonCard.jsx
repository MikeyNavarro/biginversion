import React from "react";
import "./PersonCard.css";

const PersonCard = (props) => {
  return (
    <div className="container">
      <h1>
        {props.firstName}, {props.lastName}
      </h1>
      <p>Age: {props.age}</p>
      <p>HairColor: {props.hairColor}</p>
    </div>
  );
};

export default PersonCard;
