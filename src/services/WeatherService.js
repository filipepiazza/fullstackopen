import axios from 'axios'
const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
const oneCallURL = 'https://api.openweathermap.org/data/3.0/onecall?lat='
const weatherAPIKey = 'c6c8581a4e8b4b3e8ca316060fffe707'

const getCoordinates = (cityName) => {
  return axios.get(`${geoUrl}${cityName}&appid=${weatherAPIKey}`)
}

const getWeather = (lat, lon) => {
  console.log(`${oneCallURL}${lat}&lon=${lon}&appid=${weatherAPIKey}`)
  
  return axios.get(`${oneCallURL}${lat}&lon=${lon}&appid=${weatherAPIKey}`)
}

export default { getCoordinates, getWeather }