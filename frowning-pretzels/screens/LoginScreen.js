import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import ButtonAnnuler from "../components/ButtonAnnuler";

import { userIsLoggedIn } from "../utils";
import firebase from '../config';

const auth = firebase.auth(); 

export default function LoginScreen(props) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, onLogin] = useState(false);
  const refInput2 = useRef();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo4.png")} />
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Authentification </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            onSubmitEditing={()=>{refInput2.current.focus();}}
            placeholder={"email"}
            keyboardType={"email-address"}
          />
          <TextInput
            ref={refInput2}
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
          <Button
            onPress={() => {
              const adminLogin = "Hedimr@gmail.com";
              const adminPassword = "Hedimr";
              const clientLogin = "mari.mans.info@gmail.com";
              const clientPassword = "Mariem";

              auth
                    .signInWithEmailAndPassword(email, password)
                    .then(()=>{
                      if (email === adminLogin && password === adminPassword) {
                        props.navigation.navigate("nav");
                      } else if (email === clientLogin && password === clientPassword) {
                        props.navigation.navigate("navC");
                      } else {
                        return "Identifiants incorrects, veuillez réessayer";
                      }
                        
                    })
                    .catch((err)=>{
                        alert(err);
                    });
              
            }}
          >
            se connecter
          </Button>
          <ButtonAnnuler
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            Annuler
          </ButtonAnnuler>
          <TouchableOpacity
            style={{ paddingRight: 10, width: "100%", alignItems: "flex-end" }}
          >
            <Text
              onPress={() => {
                props.navigation.navigate("CreateUser");
              }}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Create new user
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    justifyContent: "center",
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
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
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
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
});
