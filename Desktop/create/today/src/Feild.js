import React from 'react'
import { useGlobalContext } from './Global'

const Feild = ({ value }) => {
  const { values, handleChange, handleAdd, deleteF, setlayout } =
    useGlobalContext()

  console.log(values)
  console.log(value, 'key')

  return (
    <article>
      <div className='UpperDiv'>
        <div className='input-grp'>
          <label htmlFor=''>NAME</label>
          <input
            name='name'
            type='text'
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className='input-grp'>
          <label htmlFor=''>description</label>
          <input
            name='description'
            type='text'
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div className='input-grp'>
          <label htmlFor=''>quantity </label>
          <input
            name='quantity'
            type='text'
            value={values.quantity}
            onChange={handleChange}
          />
        </div>
        <div className='input-grp'>
          <label htmlFor=''>List</label>
          <input
            name='list'
            type='text'
            value={values.List}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className='backButton' onClick={() => setlayout('')}>
        back
      </button>
      <button className='addButton' onClick={() => handleAdd(value)}>
        Add
      </button>
    </article>
  )
}

export default Feild
