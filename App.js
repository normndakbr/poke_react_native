import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pokedex from './src/containers/pages/Pokedex';
import Pokemon from './src/containers/pages/Pokemon';
import Backpack from './src/containers/pages/Backpack';
import Option from './src/containers/pages/Option';
import About from './src/containers/pages/About';
import exploreIcon from './src/assets/icons/explore.png';
import pokemonIcon from './src/assets/icons/pokemon.png';
import backpackIcon from './src/assets/icons/backpack.png';
import optionIcon from './src/assets/icons/option.png';
import aboutIcon from './src/assets/icons/about.png';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: () => {
              let iconUri;

              if (route.name === 'PokéDEX') {
                iconUri = exploreIcon;
              } else if (route.name === 'Pokémon') {
                iconUri = pokemonIcon;
              } else if (route.name === 'Backpack') {
                iconUri = backpackIcon;
              } else if (route.name === 'Option') {
                iconUri = optionIcon;
              } else if (route.name === 'About') {
                iconUri = aboutIcon;
              }

              return <Image style={{ height: 26, width: 26 }} source={iconUri} />;
            },
            tabBarActiveTintColor: '#0984e3',
            tabBarInactiveTintColor: '#2d3436',
          })}
        >
          <Tab.Screen name="PokéDEX" component={Pokedex} />
          <Tab.Screen name="Pokémon" component={Pokemon} />
          <Tab.Screen name="Backpack" component={Backpack} />
          <Tab.Screen name="Option" component={Option} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  txtB18: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});