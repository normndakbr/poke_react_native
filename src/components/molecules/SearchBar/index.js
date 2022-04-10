import React from "react";
import { View, TextInput, Image } from 'react-native';
import searchIcon from '../../../assets/icons/search.png';


export default SearchBar = () => {
    return (
        <View style={{ position: 'relative' }}>
            <TextInput placeholder='Find pokémon' style={{ borderWidth: 1, borderRadius: 25, borderColor: '#2d3436', height: 40, fontSize: 13, paddingLeft: 44, paddingRight: 20 }}></TextInput>
            <Image source={searchIcon} style={{ position: 'absolute', top: 8, left: 12 }} />
        </View>
    );
}