import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, Anytown USA');
  const [profilePicture, setProfilePicture] = useState(require('./assets/profile-placeholder.png'));

  const handleSaveChanges = () => {// Save changes logic here
  };

  const handleCancelChanges = () => {// Cancel changes logic here
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./assets/back-arrow.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity onPress={handleSaveChanges}>
          <Text style={styles.headerButton}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profilePictureContainer}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <TouchableOpacity>
          <Text style={styles.changePictureButton}>Change Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />
      </View>
      <TouchableOpacity onPress={handleCancelChanges}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Text style={styles.cancelButton}>Cancel</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerButton: {
    fontSize: 18,
    color: '#007AFF'
  },
  backArrow: {
    width: 20,
    height: 20
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  changePictureButton: {
    fontSize: 18,
    color: '#007AFF'
  },
  formContainer: {
    marginBottom: 30
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  cancelButton: {
    fontSize: 18,
    color: '#007AFF',
    textAlign: 'center'
  }
});
export default ProfileScreen;