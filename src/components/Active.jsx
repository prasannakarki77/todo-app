import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Todo.context";
const Active = () => {
  const { addToList, todoList, completeTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const addHandler = () => {
    addToList(todoText);
  };
  return (
    <div>
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
      {todoList.map((todo) =>
        !todo.completed ? (
          <div className="todo" key={todo.id}>
            <input
              type="checkbox"
              className="todo__checkbox"
              defaultChecked={todo.completed}
              onClick={() => completeTodo(todo)}
            />
            <p
              className={`todo__text ${
                todo.completed && "todo__text--completed"
              }`}
            >
              {todo.todoText}
            </p>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default Active;
