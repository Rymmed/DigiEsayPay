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
import ButtonAnnuler from '../components/ButtonAnnuler';
import firebase from '../config';

const database = firebase.database();
export default function AddSatisfaction({ navigation }) {
  const [cin, onChangeCin] = useState('');
  const [nom, onChangeNom] = useState('');
  const [texte, onChangeTexte] = useState('');
  const [isValid, onValid] = useState(false);
  const handleAnnuler = () => {
    onChangeCin('');
    onChangeNom('');
    onChangeTexte('');
    onValid(false);
  };

  const saveSatisfactionData = async () => {
    const ref_satisfactions = database.ref("satisfactions");
    
    const ref_satisfaction = ref_satisfactions.child("satisfaction");
    ref_satisfaction.set({
      cin: cin,
      nom: nom,
      texte: texte
    });
  };

  return (
    <ScrollView style={styles.container}>
        
      {isValid && <Text style={styles.headerText}>Ajout réussi</Text>}

      {!isValid && (
        <>
          <TextInput
            style={styles.inputBox}
            value={cin}
            onChangeText={onChangeCin}
            placeholder={'CIN'}
            keyboardType={'default'}
          />
           <TextInput editable={false} selectTextOnFocus={false} disabled
            style={styles.inputBoxdisabled}
            value={nom}
            onChangeText={onChangeNom}
            placeholder={'Nom & Prenom'}
            keyboardType={'default'}
          />

         
          <TextInput
            style={styles.textarea}
            value={texte}
            onChangeText={onChangeTexte}
            placeholder={'Texte de satisfaction'}
            keyboardType={'default'}
          />
          <Button
                onPress={() => {
                  // Vérifiez si les dropdowns sont sélectionnés
                  if (cin && texte) {
                   onValid(true); // Si les dropdowns sont sélectionnés, activez le bouton "Ajouter"
                   saveSatisfactionData();
                 } else {
                   // Affichez une erreur si les dropdowns ne sont pas sélectionnés
                   console.error('remplir les données');
                 }
                   }}
      >
        Ajouter
      </Button>
      <ButtonAnnuler onPress={handleAnnuler} > Annuler </ButtonAnnuler>

        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

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
    borderWidth: 1,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
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
  containerdate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labeldate: {
    fontSize: 18,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
  },
  selectedDate: {
    fontSize: 20,
    marginTop: 10,
  },
  dateText: {
    fontSize: 24,
  },
  inputBoxdisabled: {
    margin:12 ,
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#999999",
    backgroundColor: 'grey',
  },
});