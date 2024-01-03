import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

const PurComp = ({ callback }: any) => {
    return (
        <View>
            <TouchableOpacity onPress={() => callback()}>
                <Text>Pure Component Click</Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(PurComp);