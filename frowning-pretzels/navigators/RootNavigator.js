import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeScreen from '../screens/WelcomeScreen';
import Subscribe from '../screens/Subscribe';

import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'importer les icônes MaterialIcons
import AddCustomer from '../screens/AddCustomer';
import AddNotification from '../screens/AddNotification';
import AddPay from '../screens/AddPay';
import AddPayMethod from '../screens/AddPayMethod';
import AddSatisfaction from '../screens/AddSatisfaction';
import DueDate from '../screens/DueDate';

const Drawer = createDrawerNavigator();
export default function RootNavigator(){
  return (
    <>
     
        <View style={styles.container}>
          <Header />
          <Drawer.Navigator
  useLegacyImplementation
  initialRouteName="Dashboard"
  style={styles.drawerNavigator}
>
<Drawer.Screen
    name="Subscribe"
    component={Subscribe}
    options={{
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
      drawerLabel: 'Login',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="login" color={color} size={24} /> // Icône Login pour "Login"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="AddCustomer"
    component={AddCustomer}
    options={{
      drawerLabel: 'Add Customer',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="person" color={color} size={24} /> // Icône Add pour "Add Customer"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="AddNotification"
    component={AddNotification}
    options={{
      drawerLabel: 'Add Notification',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="notifications" color={color} size={24} /> // Icône Notifications pour "Add Notification"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="AddPay"
    component={AddPay}
    options={{
      drawerLabel: 'Add Pay',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="payment" color={color} size={24} /> // Icône Payment pour "Add Pay"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="AddPayMethod"
    component={AddPayMethod}
    options={{
      drawerLabel: 'Add Pay Method',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="payments" color={color} size={24} /> // Icône Credit Card pour "Add Pay Method"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="AddSatisfaction"
    component={AddSatisfaction}
    options={{
      drawerLabel: 'Add Satisfaction',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="mood" color={color} size={24} /> // Icône Mood pour "Add Satisfaction"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="Dashboard"
    component={DueDate}
    options={{
      drawerLabel: 'Dashboard',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="dashboard" color={color} size={24} /> // Icône Dashboard pour "Dashboard"
      ),
    }}
    style={styles.drawerScreen}
  />
  <Drawer.Screen
    name="DueDate"
    component={DueDate}
    options={{
      drawerLabel: 'Due Date',
      drawerIcon: ({ color }) => (
        <MaterialIcons name="access-time" color={color} size={24} /> // Icône Access Time pour "Due Date"
      ),
    }}
    style={styles.drawerScreen}
  />
</Drawer.Navigator>
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