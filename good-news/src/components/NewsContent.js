import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import ClockCircleOutlined from "@ant-design/icons";
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View`
    margin: 20px;
`;
const Text = styled.Text`
  font-size: 12px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 15px;
`;
const Time = styled.Text`
  font-size: 12px;
  margin-bottom: 30px;
  color: gray;
`;
const TimeContainer = styled.View`
`;
const ShareContainer = styled.View`
  margin-bottom: 15px;
`;
const HeadContainer = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export default Basic = (cur) => {
  const navigation = useNavigation();
  const cur_news = cur.route.params;
  return (
    <ScrollView>
      <Wrapper>
        <HeadContainer>
        <Title>{cur_news.title}</Title>
        <Image source={{ uri: cur_news.urlToImage }} style={{ width: 250, height: 150, margin: 20 }} />
        </HeadContainer>
        <ShareContainer><Icon name="share-alt" size={30} color="#42A5F5" /></ShareContainer>
        <Icon name="clock-o" size={20} color="#000" /><Time>{cur_news.publishedAt}</Time>
        <Text>{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content},{cur_news.content}</Text>
    </Wrapper>
    </ScrollView>
  )
}