import React from 'react'
import { useGlobalContext } from './Global'
import Feild from './Feild'
import TodoComponent from './TodoComponent'

const FullView = () => {
  const { adddelete, finaldata } = useGlobalContext()

  return (
    <article>
      <Feild />
      <div className='todoDisplay'>
        {finaldata.map((final) => {
          return <TodoComponent value={final} />
        })}
      </div>
    </article>
  )
}

export default FullView
