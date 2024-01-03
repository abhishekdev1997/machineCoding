import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../context/Provider'

const Screen2Screen = ({ navigation }: any) => {
    const context = useContext(MyContext)

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
                <Text style={{ color: "black" }}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => context.setScreenName({ screenName: "Screen2", isVisible: true })}>
                <Text style={{ color: "black" }}>Display Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2Screen