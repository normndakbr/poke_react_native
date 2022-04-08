import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View>
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