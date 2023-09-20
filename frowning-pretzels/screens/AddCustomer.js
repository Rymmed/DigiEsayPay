import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import Button from "../components/Button";


export default function AddCustomer({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [nom, onChangeName] = useState('');
  const [surname, onChangeSurname] = useState('');
  const [phone, onChangePhone] = useState('');
  const [address, onChangeAddress] = useState('');
  const [cin, onChangeCin] = useState('');
  const [isValid, onValid] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
          <Text style={styles.regularText}>Add Customer </Text>
          <TextInput
            style={styles.inputBox}
            value={cin}
            onChangeText={onChangeCin}
            placeholder={'National ID card'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={nom}
            onChangeText={onChangeName}
            placeholder={'name'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={surname}
            onChangeText={onChangeSurname}
            placeholder={'Surname'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={phone}
            onChangeText={onChangePhone}
            placeholder={'phone'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={address}
            onChangeText={onChangeAddress}
            placeholder={'Address'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'E-mail'}
            keyboardType={'default'}
          />
          <Button
        onPress={() => onValid(!isValid)}
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
    margin:17 ,
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
});