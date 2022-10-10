import { React, useState } from "react";
import "./Card.css";
import Person from "./Person";
import data from "./data";
export default function Card() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [people, setPeople] = useState(data);
 /* function toggleAvailable() {
    console.log("clicked");
    setIsAvailable((prev) => !isAvailable);
  }*/
  return (
    <div className="card">
      <div className="title">
        {isAvailable ? people.length + " birthday today" : "0 birthday today"}
      </div>
      <div className="list">
        {isAvailable &&
          people.map((p) => <Person key={p.id} name={p.name} age={p.age} />)}
      </div>
      <button onClick={() => setPeople([])} className="btn">
        {!isAvailable ? "View all" : "Clear All"}
      </button>
    </div>
  );
}
