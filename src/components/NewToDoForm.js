import React, { useState } from "react";
function NewToDoForm(props) {
  const [des, setDes] = useState("");
  const [assignedd, setAssigend] = useState("");
  const addNewToDo = () => {
    if (des !== "" && assignedd !== "") {
      props.toDo(des, assignedd);
      setDes("");
      setAssigend("");
    }
  };

  return (
    <div className="mt-5">
      <form action="">
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            onChange={(e) => setAssigend(e.target.value)}
            type="text"
            className="form-control"
            required
            value={assignedd}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            onChange={(e) => setDes(e.target.value)}
            type="text"
            className="form-control"
            rows={3}
            required
            value={des}
          ></textarea>
        </div>
        <div className="d-inline">
          <button
            onClick={addNewToDo}
            type="button "
            className="btn btn-primary mt-3 "
          >
            Add new todo
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewToDoForm;
