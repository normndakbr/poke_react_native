import React from 'react';
import { View, Text } from 'react-native';
import RegionItem from '../../atoms/RegionItem';
import kantoIcon from '../../../assets/icons/kanto.png';
import johtoIcon from '../../../assets/icons/johto.png';
import hoennIcon from '../../../assets/icons/hoenn.png';
import sinnohIcon from '../../../assets/icons/sinnoh.png';


export default RegionCard = () => {
    return (
        <View style={{ paddingTop: 15 }}>
            <View style={{ backgroundColor: '#b2bec3', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '900' }}>Region</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#dfe6e9', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, padding: 20 }}>
                <RegionItem regionImage={kantoIcon} regionTitle="Kanto" />
                <RegionItem regionImage={johtoIcon} regionTitle="Johto" />
                <RegionItem regionImage={hoennIcon} regionTitle="Hoenn" />
                <RegionItem regionImage={sinnohIcon} regionTitle="Sinnoh" />
            </View>
        </View>
    );
} 