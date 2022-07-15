import React from 'react';
// import { useState } from 'react';

const ErrorExample = () => {
  // const [changeTitle, setChangeTitle] = useState('random')
  let title = 'random title';

  const handleClick = () => {
    console.log(title)
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change title</button>
    </>
  );
};

export default ErrorExample;
