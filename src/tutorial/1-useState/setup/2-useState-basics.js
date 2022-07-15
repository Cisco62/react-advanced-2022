import React, { useState } from 'react';

const UseStateBasics = () => {
  const [changeTitle, setChangeTitle] = useState('random title')
  
  const handleClick = () => {
    if(changeTitle === 'random title') {
      setChangeTitle('hello world')
    } else {
      setChangeTitle('random ')
    }
    
  }
  return (
    <div>
      <h2>{changeTitle}</h2>
      <button className='btn' onClick={handleClick}>Change title</button>
    </div>
  );
};

export default UseStateBasics;
