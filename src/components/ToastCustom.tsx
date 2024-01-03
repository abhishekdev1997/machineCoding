import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useMyContext, useToastDisplay } from '../hooks';

const ToastCustom = () => {
    const { displayName, visible } = useToastDisplay();


    return (
        <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
            <Text style={{ color: 'white' }}>{displayName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "black",
        width: "100%",
        alignItems: "center",
    }
})

export default ToastCustom;