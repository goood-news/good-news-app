import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Dimensions, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import NewsContainer from '../components/NewsContainer';
import MockContainer from '../components/mockContainer';

import axios from 'axios';
// import * as politicsData from '../../mockData/politics.json';
// import * as newsAPI from '../../mockData/newsapi.json';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Wrapper = styled.View``;
const Text = styled.Text`
  font-size: 15px;
`;

const tmpData = []; // list for data to stack

export default Basic = () => {
  const navigation = useNavigation(); // navigation for read full content

  // States
  const [isReady, setIsReady] = useState(false); // apploading state
  const [mockData, setMockData] = useState([]); // data list for mock test
  const [pageCnt, setPageCnt] = useState(1); // page number, will count up after loading for more loading
  
  // AppLoading functions
  const loadAssets = () => { getData(); } // load news for first landing page 
  const onFinish = () => setIsReady(true); // if page loaded for landing page, chage state from not ready to ready

  // Load news from Database
  const getData = async () => {
    try {
        await axios.get(`http://ec2-13-124-170-17.ap-northeast-2.compute.amazonaws.com/db/digital`)
      .then((res) => {
          // console.log("axios working ✅",res.data); // console for checking axios
          const result = res.data;
          result.map(cur => tmpData.push(cur)); // push new news to mockData list, +1 for page
          setMockData(tmpData);
          // setPageCnt(pageCnt+1);
        })
    }
    catch (e) {
      console.log(e);
    }
  }

  // when reached to bottom, load more news
  const handleLoadMore = () => {
    getData();
  }
  
  // renderItem function for FlatList
  const renderItem = ({item}, index) => <MockContainer cur={item} />;

  return isReady ? (
        <FlatList
          data={mockData}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          keyExtractor={item => { return item.title + (Math.random().toString()) }} // make unique key for each element
          onEndReachedThreshold={1}
        />
  ) : (
      <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />
  )
}