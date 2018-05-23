import React from 'react';
import { connect } from 'react-redux';

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

  renderWeather({ city }) {
    const { name } = city;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
