import React from 'react';
import { View, Text, FlatList, StyleSheet,Alert  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const data = [
  { id: '1', Temps: 'apres', etat: 'payer a temps promis', nb: '4',unite:'minute',action:'' },
  { id: '2', Temps: 'avant', etat: 'en cours', nb: '2',unite:'jour',action:'' },
  { id: '3', Temps: 'apres', etat: 'en retard', nb: '1',unite:'jour',action:'' },
  { id: '4', Temps: 'apres', etat: 'payer en retard', nb: '4',unite:'minute',action:'' },

  

  // Ajoutez d'autres entrées de données ici
];

export default function Dashboard({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.Temps}</Text>
      <Text style={styles.cell}>{item.etat}</Text>
      <Text style={styles.cell}>{item.nb}</Text>
      <Text style={styles.cell}>{item.unite}</Text>

      <Text style={styles.cell}>
      <Icon name="edit" size={20} color="#007BFF" onPress={() => {
  // Replace the following code with the logic for modification
  Alert.alert('Modification effectuée', 'Utilisateur modifié');
}} />

<Icon name="delete" size={20} color="#007BFF" onPress={() => {
  // Replace the following code with the logic for deletion
  Alert.alert('Suppression effectuée', 'Utilisateur supprimé');
}} /> </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>id</Text>
        <Text style={styles.headerText}>Temps</Text>
        <Text style={styles.headerText}>etat</Text>
        <Text style={styles.headerText}>nb</Text>
        <Text style={styles.headerText}>unite</Text>

        <Text style={styles.headerText}>Action</Text>


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
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
});
