import React from 'react';
import { Text, View, Image } from 'react-native';

export default PokemonCard = (props) => {
    return (
        <View style={{ margin: 6, height: 80, width: 68, borderWidth: 1, borderRadius: 18, borderColor: '#b2bec3', padding: 7 }}>
            {/* <Image source={{ uri: props.pokemonSprite }} style={{ height: '100%' }} /> */}
            <Text> {props.name} </Text>
        </View>
    );
}