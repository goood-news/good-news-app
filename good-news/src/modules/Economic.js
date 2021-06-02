import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import MockContainer from '../components/mockContainer';

import * as newsAPI from '../../mockData/newsapi.json';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Container = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

export default Basic = () => {
  const navigation = useNavigation();
  // console.log(newsAPI.articles[1]);
  return (
    <ScrollView>
    <Wrapper>
      {
        newsAPI.articles.map((cur, index) => (
          <MockContainer cur={cur} key={index} />
        ))
      }
      </Wrapper>
      </ScrollView>
  )
}