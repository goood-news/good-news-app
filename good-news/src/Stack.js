import React from 'react';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from 'react-navigation';
import Home from './modules/Home';
import UpperTabs from './UpperTabs';
import NewsContent from './components/NewsContent';

const Stack = createStackNavigator();

export default Basic = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle:''
      }}
    >
      <Stack.Screen name="Tab" component={UpperTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsContent" component={NewsContent} />
    </Stack.Navigator>
  )
}