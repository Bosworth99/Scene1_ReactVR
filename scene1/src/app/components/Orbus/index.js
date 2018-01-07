import React from 'react';
import {
    AppRegistry,
    Sphere,
    View,
} from 'react-vr';
//
import styles from './orbus.styles';

class Orbus extends React.Component {

    constructor(props) {
        super(props);

        console.log('Orbus.constructor [props:%o]', props);
    }

    render() {
        return (
            <View id={'Orbus'}>
                <Sphere 
                    radius={0.5}
                    widthSegments={20}
                    heightSegments={12}
                    style={styles.container}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Orbus', () => Orbus);

export default Orbus;