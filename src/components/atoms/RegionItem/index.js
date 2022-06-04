import React from 'react';
import { View, Image, Text } from 'react-native';

export default RegionItem = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={props.regionImage} />
            <Text style={{ marginTop: 4, color: '#545454', fontWeight: '800', fontSize: 12 }}>{props.regionTitle}</Text>
        </View>
    );
}