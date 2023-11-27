import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import Dashboard  from './Dashbord';
import Dashboard2  from './Dashbord2';
import DashbordNotif  from './DashbordNotif';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'importer les icônes MaterialIcons

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab=createMaterialBottomTabNavigator();

export default function Dashbords() {
    return (
        <Tab.Navigator>

          <Tab.Screen
    name="paiement journalier"
    component={Dashboard}
    options={{
        tabBarLabel: 'Paiement Journalier',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="dashboard" color={color} size={24} />
        ),
      }}
    style={styles.drawerScreen}
  />

      <Tab.Screen
    name="paiement en retard"
    component={Dashboard2}
    options={{
        tabBarLabel: 'Paiement en Retard',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="hourglass-end" color={color} size={24} />
        ),
      }}
    style={styles.drawerScreen}
  />
        <Tab.Screen
    name="Notifications"
    component={DashbordNotif}
    options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="notifications" color={color} size={24} />
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