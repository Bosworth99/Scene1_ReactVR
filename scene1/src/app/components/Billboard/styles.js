import React from 'react';
import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 3,
        height: 2,
        position: 'absolute',
        transform: [{ translate: [0, 0, -6] }],
        layoutOrigin: [0.5, 0.5],
    },
    text: {
        fontSize: 0.6,
        color: 'red',
    }
});

export default styles;