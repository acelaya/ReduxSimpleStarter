import axios from 'axios'

const API_KEY = '5522ddd9168d6d6bdd883d3b256365a9'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'adidas/FETCH_WEATHER'

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        city,
        payload: request
    }
}
