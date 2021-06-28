import { View, Text,StyleSheet } from 'react-native'
import React ,{Component}from 'react';

const  MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is MealDetailScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

 export default MealDetailScreen;