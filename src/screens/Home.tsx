import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import cores e tamanhos
import {COLORS, SIZES} from '../constants/theme';

//imports para navegação
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

// definindo o tipo de navegação
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background-img.jpg')}
        resizeMode="cover"
        style={styles.imageContainerBg}>
        <Text style={styles.userNameText}>Francisco Costa</Text>
        <TouchableOpacity
          style={styles.scannerBtn}
          onPress={() => navigation.navigate('Scanner')}>
          <Text style={styles.scannerBtnText}>Scannear QRCODE</Text>
        </TouchableOpacity>
      </ImageBackground>
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
  imageContainerBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userNameText: {
    color: COLORS.red,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  scannerBtn: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
  },
  scannerBtnText: {
    fontSize: SIZES.medium,
    fontWeight: '700',
    color: '#000000',
  },
});
