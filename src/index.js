/* Core */
import React, { Component } from 'react';

import MapView from 'react-native-maps';

import './config/ReactotronConfig';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: -27.2177659,
          longitude: -49.6451598,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
      >
      </MapView>
    );
  }
}
