import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { View, Text } from 'react-native';
import PokemonCard from '../../atoms/PokemonCard';

const getPokemonData = async (region, start, limit) => {
    console.log("Region = " + region);

    if (region === 'Kanto') {
        start = 0;
        limit = 151;
    } else if (region === 'Johto') {
        start = 151;
        limit = 235;
    } else if (region === 'Hoenn') {
        start = 235;
        limit = 386;
    } else if (region === 'Sinnoh') {
        start = 386;
        limit = 493;
    }

    console.log("Start = " + start);
    console.log("Limit = " + limit);

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export default PokemonList = () => {
    let start = 0, limit = 151;
    const { region, setRegion } = useState("Johto");
    const { isLoading, data, error } = useQuery(['pokemonData', region, start, limit], () => getPokemonData("Johto", start, limit));

    if (error) return <Text>Error, Try Again</Text>
    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text>Loading data...</Text>
        </View>
    );
    const { results: pokemons } = data;

    return (
        <View style={{ paddingVertical: 15 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                {pokemons.map(({ name, url }, index) => (
                    <PokemonCard key={index} name={name} url={url} />
                ))}
            </View>
        </View>
    );
}