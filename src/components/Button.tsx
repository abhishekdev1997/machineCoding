import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ onPress, label }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        margin: 2,
        padding: 10,
        borderRadius: 5
    },
    label: {
        color: "white"
    }
})

export default Button