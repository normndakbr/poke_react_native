import React from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '../../../components/molecules/SearchBar';
import RegionCard from '../../../components/molecules/RegionCard';
import PokemonList from '../../../components/molecules/PokemonList';

export default Pokedex = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 17, paddingTop: 15 }}>
        <SearchBar />
        <RegionCard />
        <PokemonList />
      </View>
    </ScrollView >
  );
}