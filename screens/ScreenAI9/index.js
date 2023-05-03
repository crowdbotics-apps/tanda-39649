import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TandaScreen = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={{
      uri: 'https://dummyimage.com/300x300/000/fff'
    }} style={styles.image} />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed euismod, diam vel bibendum bibendum, elit sapien 
        consectetur velit, vel lacinia velit quam vel velit.
      </Text>
      <Text style={styles.period}>Period: 1 month</Text>
      <Text style={styles.participants}>Participants: 10</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10
  },
  period: {
    fontSize: 14,
    marginBottom: 5
  },
  participants: {
    fontSize: 14,
    marginBottom: 20
  }
});
export default TandaScreen;