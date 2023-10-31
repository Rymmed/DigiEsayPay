import React, { useState ,  useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Button from "../components/Button";

import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View, SafeAreaView, StatusBar, Dimensions, Image
} from 'react-native';
import ButtonAnnuler from '../components/ButtonAnnuler';
const {width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
  'Jour',
  'Semaine',
  'Mois',
  'Trimestre',
  'Semestre',
  'An',
];


export default function AddPayMethod ({ navigation }){
  const [nom, onChangeName] = useState('');
  const [number_of_Installments, onChangeNumber] = useState('');
  const [the_increase_rate, onChangeRate] = useState('');
  const [isValid, onValid] = useState(false);
  const [unite, onChangeunite] = useState(null);
  const handleAnnuler = () => {
    onChangeName('');
    onChangeNumber('');
    onChangeRate('');
    onChangeunite(null)
    onValid(false);
  };


  return (
    <ScrollView style={styles.container}>
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
          <Text style={styles.regularText}>Ajouter Mode standard </Text>
          <TextInput
            style={styles.inputBox}
            value={nom}
            onChangeText={onChangeName}
            placeholder={'nom'}
            keyboardType={'default'}
          />
          <TextInput
            style={styles.inputBox}
            value={number_of_Installments}
            onChangeText={onChangeNumber}
            placeholder={'nombre des échéances'}
            keyboardType={'default'}
          />
          <View  style={styles.viewcontainer}>
          <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewcontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
              <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            selectedValue={unite}
            defaultButtonText={'unité de l\'écheance'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            onValueChange={(selectedItem) => onChange(selectedItem)}

            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
          </ScrollView></View></SafeAreaView></View>
          <TextInput
            style={styles.inputBox}
            value={the_increase_rate}
            onChangeText={onChangeRate}
            placeholder={'Le taux de majoration'}
            keyboardType={'default'}
          />
          <Button
        onPress={() => {
          // Vérifiez si les dropdowns sont sélectionnés
          if (nom && number_of_Installments && the_increase_rate) {
           onValid(true); // Si les dropdowns sont sélectionnés, activez le bouton "Ajouter"
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
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '1%',
    paddingBottom: '1%',
  },

  dropdown1BtnStyle: {
    width: '93%',
    height: 40, // Réglez la hauteur sur 40 pour correspondre à inputBox
    backgroundColor: '#FFF',
    marginVertical: 24, // Réglez la marge verticale pour correspondre à inputBox
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999999', // Réglez la couleur de la bordure pour correspondre à inputBox
    fontSize: 16, // Réglez la taille de la police pour correspondre à inputBox
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
});