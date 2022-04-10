import React from 'react';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { useQuery } from 'react-query';

const getSprites = async (url) => {
    let res = await fetch(url);
    const data = await res.json();
    return data;
}

export default PokemonCard = (props) => {
    const { isLoading, data, error } = useQuery(['pokemonSprite', props.url], () => getSprites(props.url));

    if (error) return <Text>Error, Try Again</Text>
    if (isLoading) return (
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 6, height: 80, width: 68, borderWidth: 0, borderRadius: 18, borderColor: '#b2bec3', padding: 7 }}>
            <ActivityIndicator size='large' color='#dfe6e9' />
        </View>
    );

    const { sprites: pokemonSprite } = data;

    return (
        <View style={{ margin: 6, height: 80, width: 68, borderWidth: 1, borderRadius: 5, borderColor: '#b2bec3', padding: 7 }}>
            <Image source={{ uri: pokemonSprite.front_default }} style={{ height: '100%' }} />
        </View>
    );
}