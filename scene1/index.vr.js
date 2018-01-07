import React from 'react';
import {
    AppRegistry,
    View,
} from 'react-vr';
//
import App from './src/app/App';

export default class Scene1 extends React.Component {
    
    constructor(props) {
        super(props);

        console.log('Scene1.constructor',);
    }

    render() {
        return (
            <View>
               <App version={'0.1.0'} />
            </View>
        );
    }
};

AppRegistry.registerComponent('Scene1', () => Scene1);
