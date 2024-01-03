import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useMyContext } from '../../hooks'
import { Button } from '../../components'

const Screen5Screen = ({ navigation }: any) => {
    const context: any = useMyContext()

    return (
        <View style={styles.container}>
            <Button onPress={() => context.setScreenName({ screenName: "screen5", isVisible: true })} label="Display Toast" />
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

export default Screen5Screen