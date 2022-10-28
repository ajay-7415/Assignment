import React from 'react'

const TabularComponent = ({ value }) => {
  const { ['1. open']: open } = value
  const { ['3. low']: low } = value
  const { ['4. close']: close } = value
  const { ['2. high']: high } = value
  const { ['5. volume']: volume } = value
  console.log(open, 'open')
  console.log(value, 'working')
  return (
    <div className='container'>
      <div className='column'>
        <h4>{open}</h4>
      </div>
      <div className='column'>
        <h4>{low}</h4>
      </div>
      <div className='column'>
        <h4>{close}</h4>
      </div>
      <div className='column'>
        <h4>{volume}</h4>
      </div>
      <div className='column'>
        <h4>{high}</h4>
      </div>
    </div>
  )
}

export default TabularComponent
