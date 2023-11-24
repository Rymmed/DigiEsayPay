import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function Calendrier({ navigation }) {
 
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
  current={'2023-12-04'}
  // Callback that gets called when the user selects a day
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Mark specific dates as marked
  markedDates={{
    '2023-12-05': {selected: true, marked: true, selectedColor: 'blue'},
    '2023-12-06': {marked: true},
    '2023-12-07': {selected: true, marked: true, selectedColor: 'blue'}
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