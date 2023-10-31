import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function calendar({ navigation }) {
 
    const [selected, setSelected] = useState('');

  return (
    
  <Calendar
  // Customize the appearance of the calendar
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350
  }}
  // Specify the current date
  current={'2012-03-01'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-03-02': {marked: true},
    '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
  }}
/>
  )};
  const styles = StyleSheet.create({
    style:{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      },
      theme:{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e'
      },});