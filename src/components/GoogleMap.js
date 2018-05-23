import React from 'react';

export default class GoogleMap extends React.Component {
  componentDidMount() {
    console.log(new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: this.props // lat and lng
    }));
  }

  render() {
    return (
      <div ref="map" />
    );
  }
}
