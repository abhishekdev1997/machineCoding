import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen3Screen = ({ navigation }: any) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
                <Text style={{ color: "black" }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen3Screen