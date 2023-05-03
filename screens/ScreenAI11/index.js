import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Image source={require('../assets/image.png')} style={styles.image} />
      <Text style={styles.message}>Custom message goes here</Text>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('../assets/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  applyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20
  },
  backIcon: {
    width: 30,
    height: 30
  }
});
export default ScreenComponent;