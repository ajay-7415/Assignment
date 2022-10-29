import React, { useEffect } from 'react'
import axios from 'axios'
import customFetch from './utils'
import TabularComponent from './TabularComponent'

const apiKey = `VDP9DGY8O70Q3H`
const url = `/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`

const App = () => {
  const [apiData, setApiData] = React.useState()
  const [finaldata, setFinalData] = React.useState()

  const newData = []

  const logdata = () => {
    const data = { ...apiData }

    const { ['Time Series (5min)']: metaData } = data

    const { ['2022-10-26 19:40:00']: ok } = metaData
    // const finaldata = [...metaData]
    for (let key in metaData) {
      const { [key]: newKey } = metaData
      const updateData = { ...newKey, keys: key }
      console.log(updateData, 'update')
      newData.push(updateData)
    }
    console.log(newData, 'hello')
    setFinalData(newData)
  }

  const makeApiCall = async () => {
    const res = await customFetch.get(url)

    const data = res.data

    setApiData(data)
  }

  useEffect(() => {
    makeApiCall()
  }, [])

  return (
    <>
      <div onClick={logdata}>Log</div>
      {finaldata?.map((data) => {
        return <TabularComponent value={data} />
      })}
    </>
  )
}

export default App
