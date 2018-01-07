import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-vr';
//
import BillBoard from './components/Billboard';
import Orbus from './components/Orbus';
import Terra from './environment/Terra';
//
const cubemap = '../../static_assets/starry-sky.jpg';
import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        console.log('App.constructor [version::%o]', props.version);
    }

    render() {
        return (
            <View id={'App'} style={styles.container}>
                <Terra src={cubemap} />
                <View style={styles.content}>
                    <BillBoard text={'Scene1'} />
                    <Orbus />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('App', () => App);

export default App;