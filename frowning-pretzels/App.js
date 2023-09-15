import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';

import AddCustomer from './screens/AddCustomer';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <AddCustomer />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerContainer: { backgroundColor: 'white' },
});


