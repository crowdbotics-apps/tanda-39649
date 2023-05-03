import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPaymentPeriod, setSelectedPaymentPeriod] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleApplyButton = () => {// navigate to Generated Tanda screen
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.profile}>
          <Image source={require('../assets/profile-picture.png')} style={styles.profilePicture} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.dropdowns}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Amount of money for participation</Text>
            <TouchableOpacity style={styles.dropdownButton} onPress={() => setSelectedAmount('selected option')}>
              <Text style={styles.dropdownButtonText}>{selectedAmount || 'Select an option'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Duration of the Tanda</Text>
            <TouchableOpacity style={styles.dropdownButton} onPress={() => setSelectedDuration('selected option')}>
              <Text style={styles.dropdownButtonText}>{selectedDuration || 'Select an option'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Payment period</Text>
            <TouchableOpacity style={styles.dropdownButton} onPress={() => setSelectedPaymentPeriod('selected option')}>
              <Text style={styles.dropdownButtonText}>{selectedPaymentPeriod || 'Select an option'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={[styles.applyButton, isButtonActive ? styles.activeButton : null]} onPress={handleApplyButton} disabled={!isButtonActive}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
        <View style={styles.tandaPackages}>
          {
          /* list of all Tanda packages */
        }
        </View>
        <View style={styles.myTandas}>
          {
          /* list of all Tandas that the user is participating in */
        }
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        {
        /* bottom navigation panel */
      }
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  logo: {
    width: 100,
    height: 30
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  dropdowns: {
    marginBottom: 20
  },
  dropdown: {
    marginBottom: 10
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#555'
  },
  applyButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  activeButton: {
    backgroundColor: '#007AFF'
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  tandaPackages: {
    marginBottom: 20
  },
  myTandas: {
    marginBottom: 20
  },
  bottomNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10
  }
});
export default ScreenComponent;