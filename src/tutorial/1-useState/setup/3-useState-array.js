import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const [searchValue, setSearchValue] = useState('')

  const searchHandler = (event) => {
    setSearchValue(event.target.value)
  }

  const clearHandler = () => {
    setPeople([])
  }

  const removeItemHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <div>
      <div>
        <input value={searchValue} onChange={searchHandler} placeholder='Search' />
      </div>
      {
      people.map((person) => {
        const {id, name} = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItemHandler(id)}>remove item</button>
          </div>
        );
      })
    }
    <button className='btn' onClick={clearHandler}>clear item</button>
    </div>
  );
};

export default UseStateArray;
