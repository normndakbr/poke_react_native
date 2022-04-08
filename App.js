import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

import ssbu from './assets/images/ssbu.png';

const App = () => {
  return (
    <StylingReactNativeComponent />
  );
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.txtB18}>Styling React Native Component</Text>
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