import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES} from '../constants/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Francisco Costa</Text>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: COLORS.red,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});
