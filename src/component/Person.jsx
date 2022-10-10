import React from "react";
import "./Person.css";
import person from "./img337.jpg";
export default function Person(props) {
  return (
    <div className="person">
      <img className="img" src={person} alt="person" />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="age">{props.age} years</div>
      </div>
    </div>
  );
}
