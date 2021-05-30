import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

export default Basic = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <Wrapper>
      <Text>This is good news home page</Text>
    </Wrapper>
    </ScrollView>
  )
}