import React from 'react'
import { useGlobalContext } from './Global'

const TodoComponent = ({ value }) => {
  const { deleteF } = useGlobalContext()
  const { id, name, description, quantity, list } = value
  return (
    <>
      <div className='list'>
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{description}</li>
          <li>{quantity}</li>
          <li>{list}</li>
        </ul>
        <button onClick={() => deleteF(id)}>Delete</button>
      </div>
    </>
  )
}

export default TodoComponent
