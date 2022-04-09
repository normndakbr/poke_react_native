import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ScrollView, View, Text, Image, TextInput } from 'react-native';
import searchIcon from '../../../assets/icons/search.png';
import kantoIcon from '../../../assets/icons/kanto.png';
import johtoIcon from '../../../assets/icons/johto.png';
import hoennIcon from '../../../assets/icons/hoenn.png';
import sinnohIcon from '../../../assets/icons/sinnoh.png';
import RegionList from '../../../components/molecules/RegionList';
import PokemonCard from '../../../components/molecules/PokemonCard';

const getPokemonData = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
  const res = await fetch(URL);
  const data = await res.json();

  return data;
}

export default Pokedex = () => {
  const { isLoading, data, error } = useQuery('pokemonData', getPokemonData);

  if (error) return <Text>Error, Try Again</Text>
  if (isLoading) return <Text>Loading data...</Text>
  const { results: pokemons } = data;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 17, paddingTop: 15 }}>

        {/* Search Bar */}
        <View style={{ position: 'relative' }}>
          <TextInput placeholder='Find pokémon' style={{ borderWidth: 1, borderRadius: 25, borderColor: '#2d3436', height: 40, fontSize: 13, paddingLeft: 44, paddingRight: 20 }}></TextInput>
          <Image source={searchIcon} style={{ position: 'absolute', top: 8, left: 12 }} />
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
            {pokemons.map(({ name, url }, index) => (
              <PokemonCard key={index} name={name} url={url} />
            ))}
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
    </ScrollView >
  );
}