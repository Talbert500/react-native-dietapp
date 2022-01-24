import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList,ActivityIndicator, TextInput, ScrollView} from 'react-native';
import React,{useState,useEffect} from "react";
import {Button, Divider, Header} from 'react-native-elements';
import axios from 'axios';
import {Calendar,CalendarList,Agenda} from 'react-native-calendars';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PickDietScreen from './Screens/SetupScreens.js/PickDietScreen';
import DietTimeScreen from './Screens/SetupScreens.js/DietTimeScreen';
import DietConfirmatioScreen from './Screens/SetupScreens.js/DietConfirmationScreen';
import store from './redux/store'
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store = {store}>
      <Stack.Navigator initialRouteName='Diet'>
      <Stack.Screen 
          name ="Diet" 
          component = {PickDietScreen}
          options={{headerShown: false,
        }}
          />
        <Stack.Screen 
          name ="Time" 
          component={DietTimeScreen}  
          options={{headerShown: true }}
          />
         <Stack.Screen 
          name ="Confirm" 
          component ={DietConfirmatioScreen} 
          options={{
            headerShown: true,
          }}
          />
        <Stack.Screen 
          name ="Home" 
          component={HomeScreen}  
          options={{headerShown: false }}
          />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "80%", 
    margin: 1,
    marginTop: 10,

  },
  headerText:{
    marginTop: 5,
    fontSize: 16,
    fontWeight:'bold',
    color: '#4682b4'
  },
  subText:{
    marginTop: 5,
    fontSize: 16,

  },
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    padding: 30,
    borderRadius: 11,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  dietlist: {
    flex:1,
    margin: 3,
    maxHeight: 150,
    shadowColor: "#000",
    padding: 10,
    borderRadius: 11,
    borderColor: '#000000',
    borderWidth:2
  }
});
