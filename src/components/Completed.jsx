import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Todo.context";
const Completed = () => {
  const { todoList, completeTodo } = useContext(TodoContext);

  return (
    <div>
      {todoList.map((todo) =>
        todo.completed ? (
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

export default Completed;
