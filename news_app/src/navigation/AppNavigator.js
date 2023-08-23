import React from 'react';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AboutScreen from '../screens/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Feather } from 'react-native-vector-icons/Feather';

//******create Drawer Navigator*******

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="NewsList" 
        component={NewsListScreen} 
        options={{ title: 'All News' }}
      />
      <Stack.Screen 
        name="NewsDetails" 
        component={NewsDetailsScreen} 
        options={{ title: 'News Details' }}
      />
    </Stack.Navigator>

  );
  }

  function FavoritesNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    );
  }

  function AboutNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    );
  }

const AppStack = () => {}

// function TabsNavigator() {
//     return (
       

//     );
// }

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tabs.Navigator
        // screenOptions={({ route }) => ({
        //     tabBarIcon: () => {
        //       let iconName;
        //       if(route.name=="Home") {
        //         iconName="home";
        //       } else if (route.name=="Favorites") {
        //         iconName="star";
        //       }

        //       return <Feather name={iconName} size={24} />
        //     }
        // })}
      > 
        <Tabs.Screen name="Home" component={HomeNavigator} options={{headerShown: false}} />
        <Tabs.Screen name="Favorites" component={FavoritesScreen}  />
      </Tabs.Navigator>
      
    </NavigationContainer>

  );
}


export default AppNavigator;

