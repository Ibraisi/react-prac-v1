import React, { useState } from "react";
import "./App.css";
import {ToDoTable} from "./components/toDoTable";
import {NewToDoForm} from "./components/NewToDoForm";

export const App = ()=> {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDis: "new todo", rowAssigned: "newUser" },
    { rowNumber: 2, rowDis: "new todo", rowAssigned: "newUser" },
    { rowNumber: 3, rowDis: "new todo", rowAssigned: "newUser" },
  ]);

  const newPost = (des:string, assignedd:string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDis: des,
      rowAssigned: assignedd,
    };
    setTodos(() => [...todos, newTodo]);
  };
  const deleteToDo = (id:number) => {
    let filteredTodo = todos.filter((value) => {
      return value.rowNumber !== id;
    });
    setTodos(filteredTodo);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your todo's</div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteToDo={deleteToDo} />
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            {showForm ? "close to do" : "new to do"}
          </button>
          {showForm && <NewToDoForm toDo={newPost} />}
        </div>
      </div>
    </div>
  );
}

