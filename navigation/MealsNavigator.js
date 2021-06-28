import { createStackNavigator } from "react-navigation-stack"; 
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
//import React from 'react';
import React, { Component } from "react";


 const MealsNavigator = createStackNavigator({

    Categories:CategoriesScreen,
    CategoryMeals:CategoriesMealsScreen,
    MealDetail: MealDetailScreen
});

export  default createAppContainer(MealsNavigator);