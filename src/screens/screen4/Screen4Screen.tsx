import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../context/Provider'

const Screen4Screen = ({ navigation }: any) => {
    const context = useContext(MyContext)

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Screen5")}>
                <Text style={{ color: "black" }}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => context.setScreenName({ screenName: "screen4", isVisible: true })}>
                <Text style={{ color: "black" }}>Display Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen4Screen