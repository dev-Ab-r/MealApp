import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import CategoriesScreen from './screens/CategoriesScreen';
import { loadAsync } from 'expo-font';


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
    <View style={styles.container}>
      <StatusBar  backgroundColor='#61dafb' />
      <View>
      <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View>
      
      </View>
     
      
    </View>
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
