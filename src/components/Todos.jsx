import React, { useState } from "react";
import "../styles/body.scss";
import { useContext } from "react";
import { TodoContext } from "../context/Todo.context";
const Todos = () => {
  const { addToList } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const addHandler = () => {
    addToList(todoText);
  };
  const checked = (e) => {
    if (e.target.value) {
      console.log("checked");
    } else {
      console.log("unchecked");
    }
  };
  return (
    <>
      <div className="input">
        <input
          placeholder="add details"
          className="input__field"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="input__btn" onClick={addHandler}>
          Add
        </button>
      </div>
      <div className="todo">
        <input type="checkbox" className="todo__checkbox" onChange={checked} />
        <p className="todo__text">Do coding challenges</p>
      </div>
      <div className="todo">
        <input type="checkbox" className="todo__checkbox" />
        <p className="todo__text">Do coding challenges</p>
      </div>
    </>
  );
};

export default Todos;
