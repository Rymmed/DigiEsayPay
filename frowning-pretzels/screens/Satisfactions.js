import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import Dashboard  from './Dashbord';
import ListSatisfaction  from './ListSatisfaction';
import AddSatisfaction  from './AddSatisfaction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'importer les icônes MaterialIcons

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab=createMaterialBottomTabNavigator();

export default function Dashbords() {
    return (
        <Tab.Navigator>

<Tab.Screen
    name="Ajouter Satisfaction"
    component={AddSatisfaction}
    options={{
        tabBarLabel: 'Ajouter Satisfaction',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="mood" color={color} size={24} />
        ),
      }}
    style={styles.drawerScreen}
  />
  <Tab.Screen
    name="Liste des Satisfaction"
    component={ListSatisfaction}
    options={{
        tabBarLabel: 'Liste des Satisfaction',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="list" color={color} size={24} />
        ),
      }}
    style={styles.drawerScreen}
  />

        </Tab.Navigator>
      )
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