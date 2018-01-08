import React from 'react';
import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({
    container: {
        transform: [
            { translate: [0, 0, -2] }
        ],
        layoutOrigin: [0.5, 0.5],
    },
    sphere: {
        color: 'red',
    },    
});

export default styles;