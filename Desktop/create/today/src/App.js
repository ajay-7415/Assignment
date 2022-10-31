// import logo from './logo.svg'
// import './App.css'
import Feild from './Feild'
import { GlobalProvider, useGlobalContext } from './Global'
import React from 'react'
import FullView from './FullView'
import HomePage from './HomePage'

function App() {
  return (
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>
  )
}

export default App
