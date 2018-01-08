import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Pano,
    View,
} from 'react-vr';
//
// import styles from './styles';

class Terra extends React.Component {

    constructor(props) {
        super(props);
    
        console.log('Terra.constructor [props:%o]', props);
    }

    render() {
        const {
            src,
        } = this.props;

        return (
            <Pano source={{ uri: src }} />
        );
    }
}

AppRegistry.registerComponent('Terra', () => Terra);

export default Terra;