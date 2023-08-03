import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

//Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Francisco Costa</Text>
    </SafeAreaView>
  );
}

export default App;
