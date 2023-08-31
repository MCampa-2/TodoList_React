import React, { useState } from "react";
import './style.css';


function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function handleChange(e){
    const newValue = e.target.value;
    setTodoValue(newValue);
  }

  function addTodo(e){
    e.preventDefault();
    setTodoItems((prev) =>{
      return[...prev,todoValue];
    }); 
    
    setTodoValue("");
  }

  function deleteItem(id){
    setTodoItems((prev) =>{
      return prev.filter((item,index) =>{
        return index !== id
      })
    })
  }
 

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <h1>Todo List</h1>
        <span>
          <input onChange={handleChange} type="text" placeholder="add todo..." value={todoValue}></input>
          <button type="submit">Add Todo</button>
        </span>
      </form>
      <ul>
        {todoItems.map((item, index) => <li key={index} id={index}>{item} <button className="delete" onClick={() => deleteItem(index)}>Delete</button></li>)}
      </ul>
    </div>
  );
}

export default App;
