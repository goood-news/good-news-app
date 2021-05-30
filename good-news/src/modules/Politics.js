import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import NewsContainer from '../components/NewsContainer';

import * as politicsData from '../../mockData/politics.json';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

export default Basic = () => {
  const navigation = useNavigation();
  const data = politicsData.newsContent;
  return (
    <ScrollView>
    <Wrapper>
      {
        data.map((cur,index) => (
          <NewsContainer
            key = {index}
            cur = {cur}
          />
        ))
      }
    </Wrapper>
    </ScrollView>
  )
}