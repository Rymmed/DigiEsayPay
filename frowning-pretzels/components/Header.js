import * as React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/logoBlanc.png')} // Remplacez par le chemin de votre logo
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#42a5f5',
  },
  headerContainer: {
    paddingRight: 10, // Ajustez la marge à droite pour le logo
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Alignement à droite
    height: 60, 
    backgroundColor: '#42a5f5',
    flex: 0.12,

  },
  logo: {
    width: 100, // Ajustez la largeur de votre logo
    height: 40, // Ajustez la hauteur de votre logo
    resizeMode: 'contain',
  },
  headerText: {
    padding: 40,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
