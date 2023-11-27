import React from 'react';
import { View, Text, FlatList, StyleSheet,Alert  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const data = [
  { cin: '13331111', nom: 'ali med', objet: 'Smart watch', date: '01/12',action:'' },
  { cin: '11225555', nom: 'Amir mans', objet: 'ecouteur sans fils', date: '30/11',action:'' },
  { cin: '15482222', nom: 'ali mans', objet: 'casque', date: '29/11',action:'' },

  

  // Ajoutez d'autres entrées de données ici
];

export default function Dashboard({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.cin}</Text>
      <Text style={styles.cell}>{item.nom}</Text>
      <Text style={styles.cell}>{item.objet}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>
      <Icon  name="payment" size={20} color="#007BFF" onPress={() => {    Alert.alert('Paiement effectué', 'Utilisateur payé');
}} />
      <Icon   name="notifications" size={20} color="#007BFF" onPress={() => {Alert.alert('Notification envoyée', 'Utilisateur notifié');}} />
 </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cin</Text>
        <Text style={styles.headerText}>Nom</Text>
        <Text style={styles.headerText}>Objet</Text>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Action</Text>


      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.cin}
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
