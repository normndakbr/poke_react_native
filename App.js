import React, { Component, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

import ssbu from './assets/images/ssbu.png';

const App = () => {
  return (
    <Home />
  );
}

function Home() {
  // const { isLoading, error, data } = useQuery('fetchPokemonList', () => {
  //   axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
  // });


  // if (error) return <h1>Error, Try Again</h1>
  // if (isLoading) return <h1>Loading data...</h1>
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#ffeaa7' }}></View>
      <View style={{ height: 58, flexDirection: 'row' }}>
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
          <Image style={{ height: 26, width: 26 }} source={require('./icons/setting.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>Option</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ height: 26, width: 26 }} source={require('./icons/about.png')} />
          <Text style={{ marginTop: 3, color: '#545454', fontWeight: '800', fontSize: 10 }}>About</Text>
        </View>
      </View>
    </View>
  );
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.txtB18}>Styling React Native Component 12</Text>
      <View
        style={{
          height: 350,
          width: 250,
          backgroundColor: '#b2bec3',
          marginTop: 30,
          marginLeft: 30,
          borderWidth: 5,
          borderColor: '#2d3436',
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Image
          source={ssbu}
          style={{
            height: 130,
            width: 200,
            borderWidth: 5,
            borderColor: 'white',
            borderRadius: 10,
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtB18: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App;