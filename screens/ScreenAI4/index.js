import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ResetPasswordScreen = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('../assets/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Enter your email address to reset your password</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <Image source={require('../assets/reset_password.png')} style={styles.image} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20
  },
  input: {
    padding: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  }
});
export default ResetPasswordScreen;