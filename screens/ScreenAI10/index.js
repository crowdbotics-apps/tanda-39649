import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from 'react-native';

const TandaScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/300x300/000/fff'
    }} style={styles.image} />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><Text style={styles.title}>Tanda Title</Text></Pressable>
      <Pressable><Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.</Text></Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Period: 1 month</Text>
        <Text style={styles.info}>Participants: 5</Text>
      </View>
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
    borderRadius: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },
  infoContainer: {
    flexDirection: 'row'
  },
  info: {
    marginRight: 20
  }
});
export default TandaScreen;