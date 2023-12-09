import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import Button from "../components/Button";
import { isEmailValid, isNameValid, isPhoneValid, isCinValid } from "../utils";
import { useNavigation } from "@react-navigation/native";
import ButtonAnnuler from "../components/ButtonAnnuler";
import firebase from "../config";

const database = firebase.database();

export default function AddCustomer() {
  const [email, onChangeEmail] = useState("");
  const [nom, onChangeName] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");
  const [cin, onChangeCin] = useState("");
  const [isValid, onValid] = useState(false);

  const handleAnnuler = () => {
    onChangeEmail("");
    onChangeName("");
    onChangeSurname("");
    onChangePhone("");
    onChangeAddress("");
    onChangeCin("");
    onValid(false);
  };
  const saveCustomerData = async () => {
    const ref_customers = database.ref("customers");
    
    const ref_un_customer = ref_customers.child("customer");
    ref_un_customer.set({
      cin: cin,
      nom: nom,
      surname: surname,
      phone: phone,
      address: address,
      email: email
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
            placeholder={"CIN"}
            keyboardType={"default"}
          />
          <TextInput
            style={styles.inputBox}
            value={nom}
            onChangeText={onChangeName}
            placeholder={"nom"}
            keyboardType={"default"}
          />
          <TextInput
            style={styles.inputBox}
            value={surname}
            onChangeText={onChangeSurname}
            placeholder={"Prenom"}
            keyboardType={"default"}
          />
          <TextInput
            style={styles.inputBox}
            value={phone}
            onChangeText={onChangePhone}
            placeholder={"Telephone"}
            keyboardType={"default"}
          />
          <TextInput
            style={styles.inputBox}
            value={address}
            onChangeText={onChangeAddress}
            placeholder={"Adresse"}
            keyboardType={"default"}
          />
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"E-mail"}
            keyboardType={"default"}
          />
          <Button
            onPress={() => {
              if (
                isEmailValid(email) &&
                isCinValid(cin) &&
                isPhoneValid(phone) &&
                isNameValid(nom) &&
                isNameValid(surname)
              ) {
                // Les données sont valides, vous pouvez ajouter le client.
                onValid(true);
                saveCustomerData();
              } else {
                // Les données ne sont pas valides, affichez des messages d'erreur spécifiques.
                if (!isCinValid(cin)) {
                  console.error("CIN invalide");
                }
                if (!isEmailValid(email)) {
                  console.error("Email invalide");
                }
                if (!isPhoneValid(phone)) {
                  console.error("Téléphone invalide");
                }
                if (!isNameValid(surname)) {
                  console.error("Nom invalide");
                }
                if (!isNameValid(nom)) {
                  console.error("prenom invalide");
                }
              }
            }}
          >
            Ajouter
          </Button>
          <ButtonAnnuler onPress={handleAnnuler}> Annuler </ButtonAnnuler>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  },
  inputBox: {
    margin: 17,
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
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
