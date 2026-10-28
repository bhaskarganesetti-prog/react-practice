import React from 'react';
import "./Profile.css";
const App = () => {
  const name = "Bhaskar";
  const age = 23;
  const country = "India";
  return (
    <div className="card">
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Country:{country}</p>
    </div>
  )
}

export default App