import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "todos/loadTodos"});
    }, [dispatch]);
    return(
         <div style={{ maxWidth: "500px", margin: "0 auto", padding: "1rem" }}>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
    );
}