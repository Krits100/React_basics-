import React from "react";

const Todo = (props) => {
  console.log("props=", props);
  return (
    <div>
      <h4>{props.todo_item.title}</h4>
      <p>{props.todo_item.description}</p>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Todo;
