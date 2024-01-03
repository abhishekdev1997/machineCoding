import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react';
import { ToastCustom } from '../../components';
import { MyContext } from '../../context/Provider';

const Screen1Screen = ({ navigation }: any) => {
    const [toastVisible, setToastVisible] = useState(false)
    const context = useContext(MyContext)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
                <Text style={{ color: "black" }}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => context.setScreenName({ screenName: "screen1", isVisible: true })}>
                <Text style={{ color: "black" }}>Display Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Screen1Screen