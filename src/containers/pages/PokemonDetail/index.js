import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, ScrollView, Text, Image } from 'react-native';

export default PokemonDetail = () => {
    const route = useRoute();
    const { name, sprites, moves, types, abilities } = route.params;

    console.log(name);
    moves.forEach(element => {
        console.log(element.move.name);
    });
    types.forEach(element => {
        console.log(element.type.name);
    });
    abilities.forEach(element => {
        console.log(element.ability.name);
    });

    return (
        <ScrollView>
            <View>
                <Text>Pokemon Detail Page</Text>
            </View>
        </ScrollView>
    );
}