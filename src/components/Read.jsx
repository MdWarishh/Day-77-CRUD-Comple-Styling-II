import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const deleteTodo = (id) => {
 
    const filtedtodo = todos.filter((todos) => todos.id != id);
    settodos(filtedtodo);
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="flex justify-between items-center text-white p-3 bg-gray-900 rounded-md m-3"
      >
        <span className="text-xl font-thin">{todo.title} </span>{" "}
        <button className="font-medium text-red-400 text-sm cursor-pointer"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl font-thin">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <ol>{rendertodos} </ol>
    </div>
  );
};

export default Read;
