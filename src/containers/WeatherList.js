import React from 'react';
import { connect } from 'react-redux';
import Chart from "../components/Chart";

class WeatherList extends React.Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(entry => this.renderWeather(entry))}
        </tbody>
      </table>
    );
  }

  renderWeather({ city, list }) {
    const { name } = city;
    const temps = list.map(weather => weather.main.temp);
    const humidities = list.map(weather => weather.main.humidity);
    const pressures = list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange"/>
        </td>
        <td>
          <Chart data={humidities} color="blue"/>
        </td>
        <td>
          <Chart data={pressures} color="green"/>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
