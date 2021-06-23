import React from 'react';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from './modules/Home';
import Economic from './modules/Economic';
import IT from './modules/IT';
import Opinion from './modules/Opinion';
import Politics from './modules/Politics';
import Society from './modules/Society';
import World from './modules/World';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

const Tab = createMaterialTopTabNavigator();

export default Basic = () => {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color})=>{
          if(route.name==='Home'){
            return (
              <FontAwesome5 name="calculator" size={20} color={color} />
            )
          }
          else if(route.name==='Economic'){
            return(
              <Feather name="list" size={24} color={color} />
            )
          }
          else{
            return(
              <AntDesign name="star" size={24} color={color} />
            )
          }
        }
      })}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#42A5F5',
        inactiveTintColor: 'gray',
      }}

    >
      <Tab.Screen name="Politics" component={Politics}/>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Economic" component={Economic} />
      <Tab.Screen name="IT" component={IT} />
      <Tab.Screen name="Opinion" component={Opinion} />
      <Tab.Screen name="Society" component={Society} />
      <Tab.Screen name="World" component={World}/>
    </Tab.Navigator>
  )
}