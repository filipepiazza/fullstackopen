import axios from 'axios'
const baseUrl = '/api/persons'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}


const getAll = () => {
  return axios.get(baseUrl)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  return await axios.post(baseUrl, newObject, config)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson, setToken }