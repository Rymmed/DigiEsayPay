import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const data = [
  { cin: '11111111', nom: 'med ali', objet: 'iphone', date: '04/12',action:'' },
  { cin: '11115555', nom: 'Amir ali', objet: 'Hwawie a12', date: '04/12',action:'' },
  { cin: '11122222', nom: 'mari mans', objet: 'Sumsung', date: '04/12',action:'' },

  

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
      <Icon  name="payment" size={20} color="#007BFF" onPress={() => {/* action du paiement */}} />
      <Icon   name="notifications" size={20} color="#007BFF" onPress={() => {/* action de la notification} */}} />
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
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
