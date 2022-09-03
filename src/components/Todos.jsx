import React from "react";
import '../styles/body.scss'
const Todos = () => {
  return (
    <div className="input">
      <input placeholder="add details" className="input__field" />
      <button className="input__btn">Add</button>
    </div>
  );
};

export default Todos;
