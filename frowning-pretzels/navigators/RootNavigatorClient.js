import AddPay from '../screens/AddPay';
import AddPayMethod from '../screens/AddPayMethod';
import AddSatisfaction from '../screens/AddSatisfaction';
import DueDate from '../screens/DueDate';
import { userIsLoggedIn } from "../utils";
import Calendrier from '../screens/Calendrier';
import Dashboards  from '../screens/Dashbords';
import Satisfactions  from '../screens/Satisfactions';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeScreen from '../screens/WelcomeScreen';
import Subscribe from '../screens/Subscribe';
import ListSatisfaction from '../screens/ListSatisfaction';

import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'importer les icônes MaterialIcons
import AddCustomer from '../screens/AddCustomer';
import AddNotification from '../screens/AddNotification';


import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import another icon library


import Icon from 'react-native-vector-icons/FontAwesome';



const Drawer = createDrawerNavigator();
export default function RootNavigatorClient(){
  const isLoggedIn = userIsLoggedIn ;
  return (
    <>
     
        <View style={styles.container}>
          <Header />
          {isLoggedIn ? (
          <Drawer.Navigator
screenOptions={({ route }) => ({
  gestureEnabled: route.name !== 'Welcome',
})}
initialRouteName="Dashboards"
  style={styles.drawerNavigator} 
  useLegacyImplementation
>
      <Drawer.Screen
    name="Calendrier"
    component={Calendrier}
    options={{
      drawerLabel: 'Calendrier',
      drawerIcon: ({ color }) => (
        <Icon name='calendar' size={24} color="black" />
        ),
    }}
    style={styles.drawerScreen}
  />
  </Drawer.Navigator>):(
<Drawer.Navigator
screenOptions={({ route }) => ({
  gestureEnabled: route.name !== 'Welcome',
})}
initialRouteName="Welcome"
  style={styles.drawerNavigator} 
  useLegacyImplementation
>
<Drawer.Screen
    name="Subscribe"
    component={Subscribe}
    options={{
      swipeEnabled: false,
      drawerLabel: 'Subscribe',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="home" color={color} size={24} /> // Icône Home pour "Welcome"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="Welcome"
    component={WelcomeScreen}
    options={{
      swipeEnabled: false,
      drawerLabel: 'Welcome',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="home" color={color} size={24} /> // Icône Home pour "Welcome"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="Login"
    component={LoginScreen}
    options={{
        swipeEnabled: false,
      drawerLabel: 'Login',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="login" color={color} size={24} /> // Icône Login pour "Login"
      ),
    }}
    style={styles.drawerScreen}
  />
  </Drawer.Navigator> )}
        </View>

        <View style={styles.footerContainer}>
          <Footer />
        </View>
      
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