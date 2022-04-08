import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#74b9ff' }}></View>
      <Text>Cyndaquil</Text>
      <Home />
      <Text>Totodile</Text>
      <Text>Chikorita</Text>
    </View>
  );
}

const Home = () => {
  return <Text>Pikachu</Text>
}

export default App;