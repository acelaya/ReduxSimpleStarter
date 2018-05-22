import { combineReducers } from 'redux';
import WeatherReducer from './weather-reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: WeatherReducer
});

export default rootReducer;
