export const ToDoRow : React.FC<{
rowNumber:number,
  Des:string,
  Name:string, 
  deleteToDo:Function,
}> = (props)=> {
  return (
    <tr onClick={() => props.deleteToDo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.Des}</td>
      <td>{props.Name}</td>
    </tr>
  );
}
