import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ prop }) => {
  const [active, setActive] = useState(false);
  const { title, info } = prop;

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {active && <p>{info}</p>}
    </article>
  );
};

export default Question;
