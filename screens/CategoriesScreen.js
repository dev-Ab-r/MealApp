import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet ,FlatList,Button} from 'react-native';
import { createStackNavigator } from "react-navigation-stack"; 
import { createAppContainer } from "react-navigation";
import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = (itemData)=>{

    return (

        <View style = {styles.gridItem}> 
        <Text>{ itemData.item.title } </Text> 
        </View>
    );
}




 const CategoriesScreen =props =>{
     //console.log(props);
    return (
        
        <FlatList keyExtractor={(item,index)=>item.id} data = {CATEGORIES} renderItem= {renderGridItem} numColumns={2}/> 
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex :1,
        margin:35,
        height:150,
        justifyContent:'center'
    }
});

export default CategoriesScreen;
