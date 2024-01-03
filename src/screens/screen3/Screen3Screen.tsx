import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button } from '../../components'
import { useMyContext } from '../../hooks'

const Screen3Screen = ({ navigation }: any) => {
    const context: any = useMyContext();
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("Screen4")} label="Next" />
            <Button onPress={() => context.setScreenName({ screenName: "screen3", isVisible: true })} label="Display Toast" />
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

export default Screen3Screen