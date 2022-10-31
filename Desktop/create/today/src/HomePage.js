import React from 'react'
import { useGlobalContext } from './Global'
import FullView from './FullView'
import { Main } from './TicTac/Main'

const HomePage = () => {
  const { setlayout, layout } = useGlobalContext()

  if (layout === 'ToDo') {
    return <FullView />
  }
  if (layout === 'TicTac') {
    return <Main />
  }

  return (
    <>
      <div className='Homepage'>
        <h1>Welcome To My assignment</h1>
        <div className='btn-grp'>
          <button onClick={() => setlayout('ToDo')}>ToDo List</button>
          <button onClick={() => setlayout('TicTac')}>Tic Tac Toe</button>
        </div>
      </div>
    </>
  )
}

export default HomePage
