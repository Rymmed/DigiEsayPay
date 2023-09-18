import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
export default function App(){
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Drawer.Navigator
  useLegacyImplementation
  initialRouteName="AddCustomer"
  style={styles.drawerNavigator}
>
  <Drawer.Screen
    name="Welcome"
    component={WelcomeScreen}
    options={{
      drawerLabel: 'Welcome',
      drawerIcon: ({ color }) => (
        <Ionicons name="home-outline" color={color} size={24} />
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="Login"
    component={LoginScreen}
    options={{
      drawerLabel: 'Login',
      drawerIcon: ({ color }) => (
        <Ionicons name="log-in-outline" color={color} size={24} />
      ),
    }}
    style={[styles.drawerScreen, styles.activeDrawerScreen]} // Pour l'élément actif
  />
</Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerContainer: { backgroundColor: 'white' },
  drawerNavigator: {
    backgroundColor: '#fff',
    width: 250,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  drawerScreen: {
    padding: 16,
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'none',
  },
  activeDrawerScreen: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
});


