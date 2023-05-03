import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/200x200/000/fff'
      }} style={styles.profileImage} />
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI11");
      }}><Text style={styles.profileName}>John Doe</Text></Pressable>
        <Text style={styles.profileAddress}>123 Main St, Anytown USA</Text>
        <Text style={styles.tandaCount}>Total Tandas Participated: 5</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  profileContainer: {
    alignItems: 'center'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileAddress: {
    fontSize: 16,
    marginBottom: 20
  },
  tandaCount: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ProfileScreen;