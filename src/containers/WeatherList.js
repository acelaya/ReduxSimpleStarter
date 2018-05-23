import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
          <Sparklines width={180} height={120} data={temps}>
            <SparklinesLine color="red"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines width={180} height={120} data={humidities}>
            <SparklinesLine color="blue"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines width={180} height={120} data={pressures}>
            <SparklinesLine color="green"/>
          </Sparklines>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
