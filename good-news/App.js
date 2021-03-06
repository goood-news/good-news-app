import React from 'react';
import Stack from './src/Stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store'

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
    // </Provider>
  );
}