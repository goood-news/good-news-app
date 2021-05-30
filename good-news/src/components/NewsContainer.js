import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
  align-items: center;
`;
const Text = styled.Text`
  font-size: 15px;
`;
const Container = styled.View`
  width: ${WIDTH * 0.9}px;
  height: ${WIDTH * 0.9 * 0.75}px;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export default Basic = ({cur}) => {
  const navigation = useNavigation();

  const Navigation = useNavigation();
  const getNewsContent = () => {
    Navigation.navigate("NewsContent")
  }

  if (cur !== undefined) {
    return (
      <Wrapper>
        <TouchableOpacity
          onPress={getNewsContent}
        >
        <Container>
          <Text>{cur.title}</Text>
          </Container>
          </TouchableOpacity>
      </Wrapper>
    )
  }
  else {
    return (
      <Wrapper></Wrapper>
    )
  }
  
}