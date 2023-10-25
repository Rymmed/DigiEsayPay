import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Button from "../components/Button";

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
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);
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
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            labelStyle={styles.dropdownLabel}
            dropDownStyle={styles.dropdownList}
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
          <Text style={styles.label}>l'unite de temps:</Text>
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
          <Text style={styles.label}>parametré le message de Notification:</Text>
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
<Button
  onPress={() => {
 // Vérifiez si les dropdowns sont sélectionnés
 if (Temps && etat && unite && parametre) {
  onValid(true); // Si les dropdowns sont sélectionnés, activez le bouton "Ajouter"
} else {
  // Affichez une erreur si les dropdowns ne sont pas sélectionnés
  console.error('Sélectionnez tous les dropdowns');
}
  }}
>
  Ajouter
</Button>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    margin:12 ,
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#999999",
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
    margin:12 ,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#999999",
    height: 120, // Adjust the height as needed
  },
  label: {
    fontWeight: 'bold', // Pour rendre le texte en gras
    marginRight: 5, // Espacement entre le label et le contenu
    marginLeft:15,
    fontSize: 15,
    color: 'black',
    
  },
  viewcontainer: {
    flexDirection: 'row', // Pour aligner le label à gauche et le contenu à droite
    alignItems: 'center', // Pour aligner verticalement le texte
  },
  dropdownContainer: {
    height: 40,
    width: 200,
  },
  dropdown: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownLabel: {
    fontSize: 16,
    color: 'black',
  },
  dropdownList: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});