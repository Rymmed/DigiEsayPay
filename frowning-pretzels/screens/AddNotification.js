import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';

const data = [
    'avant',
    'aprés',
  ];
const et= [
    'payer a temps promis',
    'en cours',
    'en retard',
    'payer en retard',
]
const uni= [
  'minute',
  'heure',
  'jour',
]
const param= [
  'à ecrire',
  'génerer automatiquement',
]
export default function AddNotification({ navigation }) {
  const [Temps, onChangeTemps] = useState('minute');
  const [etat, onChangeEtat] = useState('');
  const [nombre, onChangeNombre] = useState('');
  const [unite, onChangeUnite] = useState('');
  const [parametre, onChangeParametre] = useState('');
  const [texte, onChangeTexte] = useState('');
  const [isValid, onValid] = useState(false);

  return (
    <ScrollView style={styles.container}>
        
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
        <Text style={styles.regularText}>Ajouter Notification </Text>
        <View  style={styles.viewcontainer}>
          <Text style={styles.label}>Temps :</Text>
           <SelectDropdown
            data={data}
            selectedValue={Temps}

            placeholder="Temps"
            onValueChange={(itemValue) => onChangeTemps(itemValue)}
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Text style={styles.label}>date de paiement</Text>
          </View>
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>Etat de client :</Text>
           <SelectDropdown
            data={et}
            selectedValue={etat}

            placeholder="etat"
            onValueChange={(itemValue) => onChangeEtat(itemValue)}
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          </View>
          <TextInput
            style={styles.inputBox}
            value={nombre}
            onChangeText={onChangeNombre}
            placeholder={'Nombre d\'unite de temps'}
            keyboardType={'default'}
          />
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>l'unite de temps</Text>
           <SelectDropdown
            data={uni}
            selectedValue={unite}

            placeholder="unite"
            onValueChange={(itemValue) => onChangeUnite(itemValue)}
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          </View>
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>parametré le message de Notification</Text>
           <SelectDropdown
            data={param}
            selectedValue={parametre}

            placeholder="parametre"
            onValueChange={(itemValue) => onChangeParametre(itemValue)}
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          </View>
         
          <TextInput
            style={styles.textarea}
            value={texte}
            onChangeText={onChangeTexte}
            placeholder={'Texte de message de notification'}
            keyboardType={'default'}
          />
          <Pressable onPress={() => onValid(!isValid)} style={styles.button}>
            <Text style={styles.buttonText}>to validate</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold', // Pour rendre le texte en gras
    marginRight: 5, // Espacement entre le label et le contenu
    marginLeft:15,
    fontSize: 15,
    color: '#EDEFEE',
    
  },
  viewcontainer: {
    flexDirection: 'row', // Pour aligner le label à gauche et le contenu à droite
    alignItems: 'center', // Pour aligner verticalement le texte
  },
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    height: 120, // Adjust the height as needed
  },
});