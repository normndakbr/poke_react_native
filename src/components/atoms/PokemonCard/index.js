import React from 'react';
import { TouchableOpacity, ActivityIndicator, Image, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const getSprites = async (url) => {
    let res = await fetch(url);
    const data = await res.json();
    return data;
}


export default PokemonCard = (props) => {
    const { isLoading, data, error } = useQuery(['pokemonSprite', props.url], () => getSprites(props.url));
    const navigation = useNavigation();

    const onTap = () => {
        navigation.push('PokemonDetail', {
            name: pokemonName,
            sprites: pokemonSprite,
            moves: pokemonMoveset,
            types: pokemonTypes,
            abilities: pokemonAbilities
        });
    }

    if (error) return <Text>Error, Try Again</Text>
    if (isLoading) return (
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 6, height: 80, width: 68, borderWidth: 0, borderRadius: 18, borderColor: '#b2bec3', padding: 7 }}>
            <ActivityIndicator size='large' color='#dfe6e9' />
        </View>
    );

    const { sprites: pokemonSprite } = data;
    const { name: pokemonName } = data;
    const { moves: pokemonMoveset } = data;
    const { types: pokemonTypes } = data;
    const { abilities: pokemonAbilities } = data;



    return (
        <View>
            <TouchableOpacity onPress={onTap}>
                <View on style={{ margin: 6, height: 80, width: 68, borderWidth: 1, borderRadius: 5, borderColor: '#b2bec3', padding: 7 }}>
                    <Image source={{ uri: pokemonSprite.front_default }} style={{ height: '100%' }} />
                </View>
            </TouchableOpacity>
        </View>
    );
}