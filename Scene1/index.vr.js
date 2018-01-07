import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Sphere,
  View,
} from 'react-vr';

export default class Scene1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rotation: 0,
    };
  }

  render() {
    return (
      <View>
        {/* <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text> */}
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
          style={{
            transform: [
              { rotateZ: this.state.rotation },
              { translate: [0, 2, 0] },
              { scale: 0.01 },
            ],
            color
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('Scene1', () => Scene1);
