import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', nom: 'John Doe', age: 30, ville: 'New York' },
  { id: '2', nom: 'Jane Smith', age: 25, ville: 'Los Angeles' },
  { id: '3', nom: 'Bob Johnson', age: 35, ville: 'Chicago' },
  // Ajoutez d'autres entrées de données ici
];

export default function Dashboard({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nom}</Text>
      <Text style={styles.cell}>{item.age}</Text>
      <Text style={styles.cell}>{item.ville}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nom</Text>
        <Text style={styles.headerText}>Âge</Text>
        <Text style={styles.headerText}>Ville</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

