import React from 'react';
import { connect } from 'react-redux';
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends React.Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(entry => this.renderWeather(entry))}
        </tbody>
      </table>
    );
  }

  renderWeather({ city, list }) {
    const { name, coord } = city;
    const temps = list.map(weather => weather.main.temp);
    const humidities = list.map(weather => weather.main.humidity);
    const pressures = list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td><GoogleMap lat={coord.lat} lng={coord.lon} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={humidities} color="blue" units="hPa" /></td>
        <td><Chart data={pressures} color="green" units="%" /></td>
      </tr>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
