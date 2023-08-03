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
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

// definindo o tipo de navegação
type PokemonDetailsProps = {
  route: RouteProp<RootStackParamList, 'PokemonsDetails'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'PokemonsDetails'>;
};

const PokemonsDetails = ({route, navigation}: PokemonDetailsProps) => {
  const {pokemonId} = route.params;
  console.log(pokemonId);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background-img.jpg')}
        resizeMode="cover"
        style={styles.imageContainerBg}>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeBtnText}>Home</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PokemonsDetails;

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
  homeBtn: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
  },
  homeBtnText: {
    fontSize: SIZES.medium,
    fontWeight: '700',
    color: '#000000',
  },
});
