import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://reqres.in/api/users?delay=1',
  timeout: 5000,
})

