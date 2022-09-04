import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Todo.context";
import { FaTrashAlt } from "react-icons/fa";
const Completed = () => {
  const { todoList, completeTodo, removeFromList, deleteAll } =
    useContext(TodoContext);
  const [completedList, setCompletedList] = useState([]);
  useEffect(() => {
    let filteredList = todoList.filter((obj) => obj.completed === true);
    setCompletedList(filteredList);
  }, [todoList]);
  return completedList.length ? (
    <div>
      {todoList.map((todo) =>
        todo.completed ? (
          <div className="completed-todo">
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
            <FaTrashAlt
              className="delete-icon"
              onClick={() => removeFromList(todo)}
            />
          </div>
        ) : (
          <></>
        )
      )}
      <button className="delete-all-btn" onClick={() => deleteAll()}>
        <FaTrashAlt />
        Delete all
      </button>
    </div>
  ) : (
    <></>
  );
};

export default Completed;
