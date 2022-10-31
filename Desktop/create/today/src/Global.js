import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Reducer } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [values, setValues] = useState(0)
  const [formData, setFormData] = useState({})
  const [layout, setlayout] = useState('')

  const [adddelete, setAddelete] = React.useState([{ id: 0 }])
  const [finaldata, setFinalData] = useState([])

  const newData = []

  const handleAdd = (id) => {
    setAddelete((oldValue) => {
      setValues((oldValues) => {
        oldValues = oldValues + 1
        return oldValues
      })
      const add = oldValue[values].id + 1
      console.log(add, 'adding')
      return [...oldValue, { id: add }]
    })

    setFinalData([...finaldata, { ...formData, id: adddelete[values].id }])
    console.log(finaldata, 'addind')
  }

  const deleteF = (id) => {
    console.log(id, 'idsss')
    const temparr = finaldata.filter((add) => {
      return add.id !== id
    })
    // console.log(temparr, 'tempArray')
    setFinalData(temparr)
  }

  const handleChange = (e) => {
    const names = e.target.name
    const value = e.target.value

    setFormData((oldValue) => {
      return { ...oldValue, [names]: value }
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        values,
        handleChange,
        setValues,
        handleAdd,
        adddelete,
        deleteF,
        finaldata,
        setlayout,
        layout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
