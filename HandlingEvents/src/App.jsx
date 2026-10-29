import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [name , setName] = useState("");
  const [submittedName , setSubmittedName] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    setSubmittedName(name);
  }

  function typing(event){
    setName(event.target.value);
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Enter Your Name:'
        onChange={typing}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>{submittedName}</h2>
    </div>
  )
}

export default App