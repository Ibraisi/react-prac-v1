function ToDoRow(props) {
  return (
    <tr onClick={() => props.deleteToDo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.Des}</td>
      <td>{props.Name}</td>
    </tr>
  );
}
export default ToDoRow;
