import ToDoRow from "./toDoRow";
function ToDoTable(props) {
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
            Des={todo.rowDes}
            Name={todo.rowAssig}
          />
        ))}
      </tbody>
    </table>
  );
}
export default ToDoTable;
