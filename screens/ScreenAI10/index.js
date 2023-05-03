import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ApplyScreen = () => {
  const navigation = useNavigation();
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleApplyPress = () => {// Navigate to Generated Tanda screen
  };

  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI9");
    }}><View style={styles.dropdownContainer}>
        {
          /* Dropdown 1 */
        }
        <Pressable onPress={() => {
          navigation.navigate("ScreenAI10");
        }}><View style={styles.dropdown}>
          <Text style={styles.dropdownLabel}>Option 1</Text>
          <View style={styles.dropdownSelect}>
            {
                /* Dropdown options */
              }
          </View>
        </View></Pressable>

        {
          /* Dropdown 2 */
        }
        <View style={styles.dropdown}>
          <Text style={styles.dropdownLabel}>Option 2</Text>
          <View style={styles.dropdownSelect}>
            {
              /* Dropdown options */
            }
          </View>
        </View>

        {
          /* Dropdown 3 */
        }
        <View style={styles.dropdown}>
          <Text style={styles.dropdownLabel}>Option 3</Text>
          <View style={styles.dropdownSelect}>
            {
              /* Dropdown options */
            }
          </View>
        </View>
      </View></Pressable>

      {
      /* Apply button */
    }
      <TouchableOpacity style={[styles.button, isButtonActive ? styles.activeButton : styles.inactiveButton]} onPress={handleApplyPress} disabled={!isButtonActive}>
        <Text style={styles.buttonText}>Apply</Text>
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
  dropdownContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  dropdown: {
    marginRight: 20
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  dropdownSelect: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  activeButton: {
    backgroundColor: '#007AFF'
  },
  inactiveButton: {
    backgroundColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ApplyScreen;