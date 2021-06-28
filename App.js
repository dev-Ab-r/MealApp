import { StatusBar } from 'expo-status-bar';
//import React,{useState} from 'react';
import React, {Component,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from "react-navigation-stack"; 
import { createAppContainer } from "react-navigation";

import CategoriesScreen from './screens/CategoriesScreen';
import { loadAsync } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';


const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf')
  })
}

export default function App() {
  
  const[fontLoaded, setFontLoded]= useState(false)
  if(!fontLoaded){
    <AppLoading
     startAsync = {fetchFonts}
     onFinish = {()=> setFontLoded(true)}
    />
  }

  return (

    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
