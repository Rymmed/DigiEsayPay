import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Button from "../components/Button";
import {userIsLoggedIn} from "../utils"
import ButtonAnnuler from '../components/ButtonAnnuler';


export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [password2, onChangePassword2] = useState('');

  const [loggedIn, onLogin] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo4.png")}
      />
      {loggedIn && <Text style={styles.headerText}>Ajout réussi</Text>}

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Créer un utilisateur </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'ecrire password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
           <TextInput
            style={styles.inputBox}
            value={password2}
            onChangeText={onChangePassword2}
            placeholder={'Confirme password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
 <Button
                onPress={() => {
                    if(password===password2){
                        navigation.navigate("Login");
                    }else{alert("password invalide ");}
                }}>Create</Button>
                 <ButtonAnnuler
                onPress={() => {
                    navigation.goBack() ;
                }}>Annuler</ButtonAnnuler>
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
      justifyContent: 'center',
  
    
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
    logo: {
      height: 100,
      width: 300,
      resizeMode: "contain",
      marginBottom: 32,
    },
  });
