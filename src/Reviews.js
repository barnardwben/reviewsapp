import React, { useState } from "react";
import "./Reviews.css";
import people from "./reviewsdata";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
  };
  return (
    <article>
      <div>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <h4 className="h4-name">{name}</h4>
        <h4 className="h4-job">{job}</h4>
        <div className="p-container">
          <p className="p-text">{text}</p>
        </div>
      </div>
      <div>
        <button className="np-btn" onClick={prevPerson}>
          Left
        </button>
        <button className="np-btn" onClick={nextPerson}>
          Right
        </button>
      </div>

      <button className="rando-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Reviews;
