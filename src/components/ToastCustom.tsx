import { View, Text } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/Provider';

const ToastCustom = () => {
    const context = useContext(MyContext);
    const [displayName, setDisplayName] = useState('');
    const [visible, setVisible] = useState(false);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const { screenName, isVisible } = context;

        if (isVisible) {
            setDisplayName(screenName);
            setVisible(true);

            if (timer) {
                clearTimeout(timer); // Clear previous timer if it exists
            }

            const newTimer = setTimeout(() => {
                setVisible(false);
                context.setScreenName({ screenName: '', isVisible: false });
            }, 5000);

            setTimer(newTimer);
        }
    }, [context]);

    return (
        <View style={{ display: visible ? 'flex' : 'none', position: 'absolute', bottom: 0 }}>
            <Text style={{ color: 'black' }}>{displayName}</Text>
        </View>
    );
};

export default ToastCustom;