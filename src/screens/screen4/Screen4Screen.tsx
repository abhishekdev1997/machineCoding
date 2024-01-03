import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useMyContext } from '../../hooks'
import { Button } from '../../components'

const Screen4Screen = ({ navigation }: any) => {
    const context: any = useMyContext()

    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("Screen5")} label="Next" />
            <Button onPress={() => context.setScreenName({ screenName: "screen4", isVisible: true })} label="Display Toast" />
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

export default Screen4Screen