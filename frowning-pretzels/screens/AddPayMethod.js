import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

  const data = [
    'Day',
    'Week',
    'Month',
    'Quarter',
    'semester',
    'Year',
  ];


export default function AddPayMethod ({ navigation }){
  const [nom, onChangeName] = useState('');
  const [number_of_Installments, onChangeNumber] = useState('');
  const [the_increase_rate, onChangeRate] = useState('');
  const [Enable , setEnable]  = useState('day');
  const [isValid, onValid] = useState(false);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
          <Text style={styles.regularText}>Add Payment Method </Text>
          <TextInput
            style={styles.inputBox}
            value={nom}
            onChangeText={onChangeName}
            placeholder={'name'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={number_of_Installments}
            onChangeText={onChangeNumber}
            placeholder={'number of Installments;'}
            keyboardType={'default'}
          />
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>installment Unit :</Text>
           <SelectDropdown
            data={data}
            selectedValue={Enable}

            placeholder="installment Unit"
            onValueChange={(itemValue) => setEnable(itemValue)}
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
            value={the_increase_rate}
            onChangeText={onChangeRate}
            placeholder={'The increase rate'}
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
    borderWidth: 1,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 4,
    padding: 8,
    margin: 12,
    fontSize: 16,
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'grey',
    backgroundColor: 'grey',
  },
});