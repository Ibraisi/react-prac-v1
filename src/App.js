import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/toDoTable";
import NewToDoForm from "./components/NewToDoForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDes: "new todo", rowAssig: "newUser" },
    { rowNumber: 2, rowDes: "new todo", rowAssig: "newUser" },
    { rowNumber: 3, rowDes: "new todo", rowAssig: "newUser" },
  ]);

  const newPost = (des, assignedd) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDes: des,
      rowAssig: assignedd,
    };
    setTodos(() => [...todos, newTodo]);
  };
  const deleteToDo = (id) => {
    let filteredTodo = todos.filter((value) => {
      return value.rowNumber !== id;
    });
    setTodos(filteredTodo);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <dir className="card-header">Your todo's</dir>
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

export default App;
