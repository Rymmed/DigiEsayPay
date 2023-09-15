import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Digiesaypay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.175,
    backgroundColor: '#42a5f5',
  },
  headerText: {
    padding: 40,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
