import React from 'react';

//Imports para a navgação
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Imports das telas
import {Home, Scanner, PokemonsDetails} from './screens';

//Criação da tipagem para a navegação
export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  PokemonsDetails: {id: number; name: string; image: string; types: string[]};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    // Cria a navegação entre as telas
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="PokemonsDetails" component={PokemonsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
