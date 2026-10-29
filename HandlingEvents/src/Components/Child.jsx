import React from 'react'

const Child = ({count , counter}) => {
    const incrementButton = () =>{
       counter(count + 1)
    };

    const decrementButton = () =>{
       counter(count - 1)
    }; 

    const resetButton = () =>{
      counter(count * 0)
    }
  return (    
    <div>
        <button onClick={incrementButton }>Increment + 1</button>
        <button onClick={decrementButton}>Drement - 1</button>
        <button onClick={resetButton}>Reset</button>
    </div>   
  );
};

export default Child