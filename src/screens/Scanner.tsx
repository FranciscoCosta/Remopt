import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//imports para navegação
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// definindo o tipo de navegação
type ScannerProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Scanner = ({navigation}: ScannerProps) => {
  return (
    <View style={styles.container}>
      <Text>Scanner</Text>
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
