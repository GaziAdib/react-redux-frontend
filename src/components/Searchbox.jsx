import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searched } from '../rtk-query/features/project/filter/filterSlice';


const Searchbox = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            className="outline-none border-none mr-2"
            type="search"
            name="search"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </form>
  )
}

export default Searchbox