import {StyleSheet, View} from 'react-native';
import React from 'react';

//imports para navegação
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

//Imports para o scanner
import QRCodeScanner from 'react-native-qrcode-scanner';

// definindo o tipo de navegação
type ScannerProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Scanner = ({navigation}: ScannerProps) => {
  const handleRead = (data: string) => {
    navigation.navigate('PokemonsDetails', {
      url: data,
    });
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner onRead={({data}) => handleRead(data)} />
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
