import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
const images = [{
  id: 1,
  source: require('../assets/image1.jpg'),
  title: 'Title 1',
  description: 'Description 1'
}, {
  id: 2,
  source: require('../assets/image2.jpg'),
  title: 'Title 2',
  description: 'Description 2'
}, {
  id: 3,
  source: require('../assets/image3.jpg'),
  title: 'Title 3',
  description: 'Description 3'
}];

const ScreenComponent = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handleGetStarted = () => {// navigate to sign-up screen
  };

  return <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => <View key={image.id} style={styles.imageContainer}>
            <Image source={image.source} style={styles.image} />
            <Text style={styles.title}>{image.title}</Text>
            <Text style={styles.description}>{image.description}</Text>
          </View>)}
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI3");
      }}><Text style={styles.getStartedButtonText}>Get Started</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  getStartedButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  getStartedButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default ScreenComponent;