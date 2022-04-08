import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text18}>Styling React Native Component</Text>
      <View
        style={{
          height: 250,
          width: 250,
          backgroundColor: '#636e72',
          marginTop: 30,
          marginLeft: 30,
          borderWidth: 5,
          borderColor: '#2d3436',
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  text18: {
    fontSize: 18,
  }
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#74b9ff' }}></View>
      <Text>Cyndaquil</Text>
      <Text>Pikachu</Text>
      <Text>Totodile</Text>
      <Text>Chikorita</Text>
      <Photo />
      <PokeBox />
    </View>
  );
}

const Photo = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png' }}
        style={{ height: 80, width: 80 }} />
      <Text
        style={{ color: '#0984e3' }}
      >Wartortle</Text>
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
        <Text
          style={{ color: '#636e72' }}
        >Magneton</Text>
      </View>
    );
  }
}

export default App;