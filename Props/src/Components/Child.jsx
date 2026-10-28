import React from 'react'
import "./Child.css"
const Child = (prop) => {
  return (
    <div className="card">
        <img src = {prop.pizza} alt="" />
        <h3>{prop.title}</h3>
        <p>{prop.price}</p>
        <button>Order Now</button>
    </div>
  );
};

export default Child