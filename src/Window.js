import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Animated, Easing } from 'react-native';

import {
  createTransition,
  Fade,
  FlipX,
  FlipY,
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideDown,
} from 'react-native-transition';

import Brooom from './Brooom';

// Use all the transitions one after another
const transitions = [Brooom, Fade, FlipX, FlipY, SlideLeft, SlideRight, SlideUp, SlideDown];
const transitionIndex = 0;

// Create Transition component
const Transition = createTransition();

const WIDTH = 100;
const HEIGHT = 100;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: WIDTH + 42,
    height: HEIGHT + 42,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
});

const images = [
  // require('./images/react.png'),
  //
  require('./images/nodejs.png'),
  require('./images/tux.png'),
  require('./images/redux.png'),
];

class Window extends PureComponent {
  _index = 0;
  _timer = null;

  componentDidMount() {
    // Setup a transition on a fixed interval
    this._timer = setInterval(this._change, 1000);
  }

  componentWillUnmount() {
    // Clear out timers
    clearInterval(this._timer);
  }

  _change = () => {
    this._index = (this._index + 1) % (images.length);
    transitionIndex = (transitionIndex + 1) % transitions.length;

    // Transition the images with different style one after another
    this._transition.show(
      <Image source={images[this._index]} resizeMode="contain" style={styles.imageContainer} />,
      transitions[transitionIndex]
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Transition easing={Easing.elastic(1)} duration={800} ref={(node) => { this._transition = node; }}>
          <Image source={images[0]} resizeMode="contain" style={styles.imageContainer} />
        </Transition>
      </View>
    )
  }
}

export default Window;
