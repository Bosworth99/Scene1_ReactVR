import React from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-vr';
//
import styles from './styles';

class BillBoard extends React.Component {

    constructor(props) {
        super(props);

        console.log('BillBoard.constructor [props:%o]', props);
    }

    render() {
        const {
            text,
        } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('BillBoard', () => BillBoard);

export default BillBoard;