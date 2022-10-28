import axios from 'axios'

const customFetch = axios.create({
  baseURL: 'https://www.alphavantage.co',
})

export default customFetch
