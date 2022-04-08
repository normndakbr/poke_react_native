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
      <TextInput style={{ borderWidth: 1 }}></TextInput>
      <PokeBox />
    </View>
  );
}

const Home = () => {
  return <Text>Pikachu</Text>
}

const Photo = () => {
  return <Image source={{ uri: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png' }} style={{ height: 200, width: 200 }} />
}

class PokeBox extends Component {
  render() {
    return <Text>This PokeBox is a class component</Text>
  }
}

export default App;