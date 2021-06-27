import { createStackNavigator } from "react-navigation-stack"; 
import CategoriesScreen from './screen/CategoriesScreen';
import CategoriesMealsScreen from './screen/CategoriesMealsScreen';

createStackNavigator({
    CategoriesScreen:CategoriesScreen,
    CategoriesMealsScreen:CategoriesMealsScreen
})