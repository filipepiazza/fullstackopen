import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  return await axios.get(baseUrl)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  return await axios.post(baseUrl, newObject, config)
}

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response
}

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response
}

const comment = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(
    `${baseUrl}/${id}/comments`,
    newObject,
    config
  )
  return response
}

export default { getAll, setToken, create, update, deleteBlog, comment }
