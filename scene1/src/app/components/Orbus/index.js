import React from 'react';
import {
    AppRegistry,
    Sphere,
    View,
} from 'react-vr';
//
import styles from './styles';

class Orbus extends React.Component {

    constructor(props) {
        super(props);

        console.log('Orbus.constructor [props:%o]', props);

        this.state = {
            rotation: 0,
        }

        this.rotate = this.rotate.bind(this);
    }

    componentDidMount() {
        this.lastUpdate = Date.now();
        this.rotate();
    }

    componentWillUnmount() {
        if (this.frameHandle) {
            cancelAnimationFrame(this.frameHandle);
            this.frameHandle = null;
        }
    }
    
    rotate() {
        const now = Date.now();
        const delta = now - this.lastUpdate;
        this.lastUpdate = now;

        this.setState({
            rotation: this.state.rotation + delta / 60,
        });

        this.frameHandle = requestAnimationFrame(this.rotate);
    }

    render() {
        const { rotation } = this.state;
        const rotY = rotation;
        const rotX = rotation;
        const rotZ = rotation;

        return (
            <View style={styles.container}>
                <Sphere 
                    style={{
                        color: 'white',
                        transform: [
                            { rotateY: rotY },
                            { rotateX: rotX },
                            { rotateZ: rotZ },
                        ]
                    }}
                    radius={.5}
                    widthSegments={8}
                    heightSegments={8}
                    wireframe={true}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Orbus', () => Orbus);

export default Orbus;