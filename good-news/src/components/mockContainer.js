import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, Image } from 'react-native';
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
  font-size: 11px;
`;
const Container = styled.View`
  /* width: ${WIDTH * 0.9}px;
  height: ${WIDTH * 0.9 * 0.75}px; */
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
`;

export default Basic = ({cur}) => {
  const navigation = useNavigation();
  const Navigation = useNavigation();
  const getNewsContent = () => {
    Navigation.navigate("NewsContent", cur);
  }
  // console.log("cur", cur);
  if (cur !== undefined) {
    return (
      <Wrapper>
        <TouchableOpacity
          onPress={()=>getNewsContent()}
        >
        <Container>
            <Title>{cur.title}</Title>
            <Image source={{ uri: cur.urlToImage }} style={{ width: 250, height: 150, margin: 20}} />
            <Text>{cur.content.slice(30)}...</Text>
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