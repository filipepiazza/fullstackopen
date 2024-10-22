import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  return await axios.get(baseUrl)
}

const create = async newObject => {
    const config = {
      headers: { Authorization: token },
    }
    return await axios.post(baseUrl, newObject, config)
  }

export default { getAll, setToken, create }