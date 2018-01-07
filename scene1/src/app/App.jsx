import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-vr';
//
import Orbus from './components/Orbus'
//
import styles from 'app.styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        console.log('App.constructor [version::%o]', props.version);
    }

    render() {
        return (
            <View id={'App'} style={styles.container} >
                <Orbus foo={'bar'}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('App', () => App);

export default App;