import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#74b9ff' }}></View>
      <Text>Cyndaquil</Text>
      <Home />
      <Text>Totodile</Text>
      <Text>Chikorita</Text>
      <Photo />
      <PokeBox />
    </View>
  );
}

const Home = () => {
  return <Text>Pikachu</Text>
}

const Photo = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png' }}
        style={{ height: 80, width: 80 }} />
      <Text>Wartortle</Text>
    </View>
  );
}

class PokeBox extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://archives.bulbagarden.net/media/upload/thumb/7/72/082Magneton.png/250px-082Magneton.png' }}
          style={{ height: 80, width: 80 }} />
        <Text>Magneton</Text>
      </View>
    );
  }
}

export default App;