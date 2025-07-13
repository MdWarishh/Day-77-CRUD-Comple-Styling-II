import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const Create = (props) => {

     const todos = props.todos
    const settodos = props.settodos

     const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(), 
      title: title,
      isCompleted: false,
    };

    // let copytodos = [...todos]  // copy kro new variable me
    // copytodos.push(newtodo)    // push kro
    // settodos(copytodos)        //update kro
    //* ye 3 line ka kaam ye akela line kr rha
    settodos([...todos, newtodo]); 
    // ye copy krke push kr rha new todo me fir update krke settodos me daal rha
    settitle("");
  }


    
  return (
    <div className="w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-400">Reminders</span> for <br />
        Task
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-b w-full text-2xl font-thin p-2 outline-0"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="title"
        />
        <br />
        <br />
        <button className="text-xl px-10 py-2 border rounded mt-5 cursor-pointer hover:bg-red-700">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default Create