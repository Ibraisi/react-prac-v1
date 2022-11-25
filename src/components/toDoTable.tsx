import React from "react";
import {ToDoRow} from "./toDoRow";
export const ToDoTable: React.FC<{
  todos:ToDoModle[], deleteToDo:Function 
}> = (props)=> {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigend</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <ToDoRow
            key={todo.rowNumber}
            deleteToDo={props.deleteToDo}
            rowNumber={todo.rowNumber}
            Des={todo.rowDis}
            Name={todo.rowAssigned}
          />
        ))}
      </tbody>
    </table>
  );
}
