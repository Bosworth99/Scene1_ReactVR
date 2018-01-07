import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-vr';
//
import App from './src/app/App.jsx';

export default class Scene1 extends React.Component {
    render() {
        return (
            <View id={'Scene1'}>
                <App version={'0.1.0'}/>
            </View>
        );
    }
};

AppRegistry.registerComponent('Scene1', () => Scene1);
