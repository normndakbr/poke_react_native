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
            <View style={{ marginHorizontal: 40, marginVertical: 10 }}>
                <View>
                    <Image source={{ uri: sprites.front_default }} style={{ flex: 1, resizeMode: 'contain', aspectRatio: 1 }} />
                </View>

                <View style={{ backgroundColor: '#b2bec3', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 14 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '900' }}>{`${name.charAt(0).toUpperCase() + name.slice(1)}`}</Text>
                </View>
                {/* <View style={{ flexDirection: 'row', backgroundColor: '#dfe6e9', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, padding: 20 }}> */}
                {/* <RegionItem regionImage={kantoIcon} regionTitle="Kanto" />
                    <RegionItem regionImage={johtoIcon} regionTitle="Johto" />
                    <RegionItem regionImage={hoennIcon} regionTitle="Hoenn" />
                    <RegionItem regionImage={sinnohIcon} regionTitle="Sinnoh" /> */}
                {/* </View> */}
            </View>
        </ScrollView>
    );
}