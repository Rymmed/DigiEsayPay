// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import firebase from '../config';

const database = firebase.database();

export default function ListSatisfaction({ navigation }) {
    const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   const satisfactionData = [
  //     { id: 10000001, title: 'Ali Moussa', subtitle: 'Kitchenela', description: 'Client loyal et toujours dans les délais', color: '#00998899' },
  //     { id: 10000002, title: 'Ahmed Ben Ahmed', subtitle: 'Arabia', description: 'Client fidèle et toujours dans les temps', color: '#00998899' },
  //     { id: 10000003, title: 'John Doe', subtitle: 'Café Paris', description: 'Paiement reçu à temps, client satisfait', color: '#00998899' },
  //     { id: 10000004, title: 'Jane Smith', subtitle: 'La Cuisine', description: 'Paiement immédiat, excellente collaboration', color: '#00998899' },
  //     { id: 10000005, title: 'Fatemeh Khan', subtitle: 'Le Palais', description: 'Retard de paiement, plan de paiement établi', color: '#aa002299' },
  //     { id: 10000006, title: 'Carlos Rodriguez', subtitle: 'Boulangerie Royale', description: 'Paiement reçu à temps, client fidèle', color: '#00998899' },
  //     { id: 10000007, title: 'Sophie Martin', subtitle: 'Dîner Express', description: 'Retard de paiement, mais compréhension mutuelle', color: '#aa002299' },
  //     { id: 10000008, title: 'Mohamed Ali', subtitle: 'Le Jardin Secret', description: 'Paiement rapide, recommande nos services', color: '#00998899' },
  //     { id: 10000009, title: 'Elena Gonzalez', subtitle: 'Pâtisserie Délice', description: 'Paiement reçu à temps, client satisfait', color: '#00998899' },
  //     { id: 10000010, title: 'David Williams', subtitle: 'Chez Victor', description: 'Retard de paiement, suivi actif pour résoudre', color: '#aa002299' },]
  //   setFilteredDataSource(satisfactionData);
  //   setMasterDataSource(satisfactionData);
  // }, []);

  const ref_satisfactions = database.ref("satisfactions");
    const [satisfactionData, setData] = useState([])
    useEffect(() => {
        ref_satisfactions.on("value", (snapshot) => {
            var d = [];
            snapshot.forEach(satisfaction => {
                d.push(satisfaction.val());
            });
            setData(d);
            setFilteredDataSource(satisfactionData);
            setMasterDataSource(satisfactionData);
        });

        return () => {
            ref_satisfactions.off();
        }
    }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <ScrollView style={{ ...styles.itemStyle, backgroundColor: "#228899" }}>
        <Text style={{ color: 'white' }} onPress={() => getItem(item)}>
          {item.texte}
        </Text>
        <Text style={{ color: 'white' }}>{item.nom}</Text>
        <Text style={{ color: 'white' }}>{item.cin}</Text>
      </ScrollView>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
    );
  };

  const getItem = (item) => {
    alert(`Id: ${item.id}\nTitle: ${item.title}\nSubtitle: ${item.subtitle}\nDescription: ${item.description}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    marginBottom: 5,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});