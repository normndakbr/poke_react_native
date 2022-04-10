import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pokedex, PokemonDetail } from '../../containers/pages';

const PokedexStack = createNativeStackNavigator();

export default PokedexStackNavigator = () => {
    return (
        <PokedexStack.Navigator
            initialRouteName='PokedexList'
            screenOptions={{ headerShown: false }}
        >
            <PokedexStack.Screen name='PokedexList' component={Pokedex} />
            <PokedexStack.Screen name='PokemonDetail' component={PokemonDetail} />
        </PokedexStack.Navigator>
    );
}