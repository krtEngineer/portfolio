import React, { useState, useEffect } from "react";
import { greetings } from "../constants/greetings";
import Greeting from "./Greeting";

const GreetingSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let newIndex = (index + 1) % greetings.length;
    let timeout = setTimeout(() => {
      setIndex(newIndex);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="slider-container">
      <Greeting greeting={greetings[index]}></Greeting>
    </div>
  );
};

export default GreetingSlider;
