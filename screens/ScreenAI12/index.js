import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PackageScreen = ({
  navigation
}) => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose a Package</Text>
      </View>
      <View style={styles.package}>
        <Image source={require('../assets/package.png')} style={styles.packageImage} />
        <View style={styles.packageDetails}>
          <Text style={styles.packageTitle}>Basic Package</Text>
          <Text style={styles.packagePrice}>$9.99</Text>
          <Text style={styles.packageMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  package: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  packageImage: {
    width: 100,
    height: 100,
    marginRight: 20
  },
  packageDetails: {
    flex: 1
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  packageMessage: {
    fontSize: 14,
    color: '#666'
  },
  continueButton: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 10
  },
  cancelButtonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PackageScreen;