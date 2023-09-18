import React, { useState ,  useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Platform,

} from 'react-native';

const data = [
    'hwawie a12',
    'sumsung',
    'iphone',
  ];
export default function DueDate({ navigation }) {
  const [cin, onChangeCin] = useState('');
  const [nom, onChangeNom] = useState('');
  const [num, onChangeNumero] = useState('');
  const [montant, onChangeMontant] = useState('');
  const [dt, onChangeDt] = useState('');

  const [montantdispo, onChangeMontantDispo] = useState('');
  const [isValid, onValid] = useState(false);
  const [Enable , setEnable]  = useState('day');
  const [currentDate, setCurrentDate] = useState('');


  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear() }`;
    setCurrentDate(formattedDate);
  }, []);


  return (
    <ScrollView style={styles.container}>
        
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
        <Text style={styles.regularText}>Ajouter Satisfaction </Text>
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
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>Objet :</Text>
           <SelectDropdown
            data={data}
            selectedValue={Enable}

            placeholder="objet"
            onValueChange={(itemValue) => setEnable(itemValue)}
            defaultValue={'objet'} // use default value by index or default value
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
          <TextInput editable={false} selectTextOnFocus={false} disabled
            style={styles.inputBoxdisabled}
            value={num}
            onChangeText={onChangeNumero}
            placeholder={'l\'echeance n°'}
            keyboardType={'default'}
          />
           <TextInput editable={false} selectTextOnFocus={false} disabled
            style={styles.inputBoxdisabled}
            value={montant}
            onChangeText={onChangeMontant}
            placeholder={'le montant à payer'}
            keyboardType={'default'}
          />

         
          <TextInput
            style={styles.input}
            value={montantdispo}
            onChangeText={onChangeMontantDispo}
            placeholder={'Le Montant Disponible'}
            keyboardType={'default'}
          />
          <TextInput editable={false} selectTextOnFocus={false} disabled
            style={styles.inputBoxdisabled}
            value={dt}
            onChangeText={onChangeDt}
            placeholder={currentDate}
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
  inputBoxdisabled: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'grey',
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: "#42a5f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color:'black',
    textAlign: 'center',
    fontSize: 25,
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
});