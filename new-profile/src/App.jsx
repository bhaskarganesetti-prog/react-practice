import React from 'react'
// import "/App.css"
import Child from "./Components/Child"
import pizza from "./assets/pizza.avif"
const App = () => {
  const title = "Pizza";
  const price = 200;

  return (
    <div>
      <Child pizza ={pizza} title={title} price={price} />
    </div>
  );
};

export default App