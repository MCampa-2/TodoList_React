import React, { useRef, useState } from "react";
import './style.css';


function App() {
  
const [todos, setTodo] = useState([]);
const [isDone, setIsDone] = useState(false);
const ref = useRef(null);


function addTodo(e){
  e.preventDefault();
  const currentValue = ref.current.value;
  if(currentValue){
    setTodo((prev) =>{
      return [...prev, currentValue]
    });
    
    ref.current.value = ""
  }
  
}
 
function handleChange(){
 setIsDone(!isDone);
 console.log("checked")
}



  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <h1>Todo List</h1>
        <span>
          <input ref={ref} type="text" placeholder="add todo..." ></input>
          <button type="submit">Add Todo</button>
        </span>
      </form>
      <ul>
        {todos.map((item,index) => <li key={index}><input type="checkbox" onChange={handleChange} style={{textDecoration: isDone? "line-through": "none"}}></input>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
