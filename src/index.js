/* Core */
import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';
import Modal from 'react-native-modal';

import './config/ReactotronConfig';

import styles from './styles';

export default class App extends Component {
  state = {
    isModalVisible: false,
    markers: [],
  }

  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  createMarker = (event) => {
    this.setState({
      markers: [
        ...this.state.markers, { latlng: event.nativeEvent.coordinate },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView onLongPress={(event) => { this.createMarker(event) }}
          style={styles.map}
          region={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
            />
          ))}
        </MapView>
        <Modal
          style={styles.modal}
          isVisible={this.state.isModalVisible}
          backdropOpacity={0.6}
        >
          <View>
            <Text style={styles.modalTitle}>Adicionar novo local</Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => this.setState({ isModalVisible: false })}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} >
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
