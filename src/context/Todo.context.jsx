import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  todoList: [localStorage.getItem("list")],
  addToList: () => {},
  removeFromList: () => {},
  completeTodo: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  // useEffect(() => {

  // }, [todoList]);
  const addToList = (todoText) => {
    if (!todoText.length) return;
    const todo = {
      todoText: todoText,
      id: Math.random(10000),
      completed: false,
    };
    let oldTodoList = todoList.slice();
    oldTodoList.push(todo);
    setTodoList(oldTodoList);
  };
  const removeFromList = () => {};
  const completeTodo = (todo) => {
    let oldTodoList = todoList.slice();
    for (const obj of oldTodoList) {
      if (obj.id === todo.id) {
        obj.completed = !todo.completed;
        console.log("updated");
      }
    }

    setTodoList(oldTodoList);
  };
  const value = {
    todoList,
    addToList,
    removeFromList,
    completeTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
