import React from 'react';
import { useQuery } from 'react-query';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import exploreIcon from './src/assets/icons/explore.png';
import pokemonIcon from './src/assets/icons/pokemon.png';
import backpackIcon from './src/assets/icons/backpack.png';
import optionIcon from './src/assets/icons/option.png';
import aboutIcon from './src/assets/icons/about.png';
import kantoIcon from './src/assets/icons/kanto.png';
import johtoIcon from './src/assets/icons/johto.png';
import hoennIcon from './src/assets/icons/hoenn.png';
import sinnohIcon from './src/assets/icons/sinnoh.png';


const Tab = createBottomTabNavigator();

const RegionList = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={props.regionImage} />
      <Text style={{ marginTop: 4, color: '#545454', fontWeight: '800', fontSize: 12 }}>{props.regionTitle}</Text>
    </View>
  );
}

const Pokedex = () => {
  // const { isLoading, error, data } = useQuery('fetchPokemonList', () => {
  //   axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
  // });


  // if (error) return <h1>Error, Try Again</h1>
  // if (isLoading) return <h1>Loading data...</h1>
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 17, paddingTop: 15 }}>

        {/* Search Bar */}
        <View style={{ position: 'relative' }}>
          <TextInput placeholder='Find pokémon' style={{ borderWidth: 1, borderRadius: 25, borderColor: '#2d3436', height: 40, fontSize: 13, paddingLeft: 44, paddingRight: 20 }}></TextInput>
          <Image source={require('./src/assets/icons/search.png')} style={{ position: 'absolute', top: 8, left: 12 }} />
        </View>

        {/* Filter Content */}
        <View style={{ paddingTop: 15 }}>
          <View style={{ backgroundColor: '#b2bec3', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '900' }}>Region</Text>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#dfe6e9', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, padding: 20 }}>
            <RegionList regionImage={kantoIcon} regionTitle="Kanto" />
            <RegionList regionImage={johtoIcon} regionTitle="Johto" />
            <RegionList regionImage={hoennIcon} regionTitle="Hoenn" />
            <RegionList regionImage={sinnohIcon} regionTitle="Sinnoh" />
          </View>
        </View>

        {/* Main Content */}
        <View style={{ paddingTop: 15 }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ margin: 7, height: 80, width: 68, borderWidth: 1, borderRadius: 18, borderColor: '#b2bec3', padding: 7 }}>
              <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' }} style={{ height: '100%' }} />
            </View>
          </View>
        </View>
      </View>



      {/* Navigation Bar */}
      {/* <View style={{ height: 58, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/explore.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>PokéDEX</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/pokemon.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>Pokémon</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/backpack.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>Pack</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/option.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>Option</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/about.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>About</Text>
        </View>
      </View> */}
    </View >
  );
}

const Pokemon = () => {
  return (
    <View>
      <Text> My Pokemon List </Text>
    </View>
  );
}

const Pack = () => {
  return (
    <View>
      <Text> My Pack List </Text>
    </View>
  );
}

const Option = () => {
  return (
    <View>
      <Text> Options </Text>
    </View>
  );
}

function About() {
  return (
    <View>
      <Text> About me </Text>
    </View>
  );
}

const App = () => {
  return (
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
            } else if (route.name === 'Pack') {
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
        <Tab.Screen name="Pack" component={Pack} />
        <Tab.Screen name="Option" component={Option} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txtB18: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App;