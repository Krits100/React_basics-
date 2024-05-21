import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos list</h3>
      Todos works.
      {props.data.map((todo_item, index) => {
        console.log(index);
        return <Todo key={index} todo_item={todo_item} />;
      })}
    </div>
  );
};
export default Todos;
