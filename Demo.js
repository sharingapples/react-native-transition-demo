import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import DemoPage from './DemoPage';
import Transition, { Flip } from 'react-native-transition';

const colors = [
  'red',
  'blue',
  'green',
  'brown',
  'magenta',
  'purple',
  'gray',
  'black',
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
const myAnimation = (value, toValue, { duration }) => {
  return new Promise((resolve, reject) => {
    Animated.spring(value, {
      toValue,
      easing: Easing.elastic(1.2),
    }).start(() => {
      resolve();
    });
  });
}

const MyStyle = {
  out: (value, bounds) => ({
    left: value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -bounds.width],
    }),
    width: bounds.width,
  }),

  in: (value, bounds) => ({
    left: value.interpolate({
      inputRange: [0, 1],
      outputRange: [bounds.width, 0],
    }),
    width: bounds.width,
  }),
}

export default class Demo extends Component {
  onSwipe = (e) => {
    console.log('Switch to another page');
    this.setState({
      number: this.state.number + 1,
      color: randomColor(),
    }, () => {
      this._transition.add(
        <DemoPage number={this.state.number} color='white' backColor={this.state.color} onSwipe={this.onSwipe} />,
        { style: MyStyle, animation: myAnimation }
      );
    });
  }

  state = {
    number: 1,
    color: randomColor(),
  }

  render() {
    const { number, color } = this.state;
    return (
      <Transition ref={(node) => { this._transition = node; }} duration={500}>
        <DemoPage number={number} color='white' backColor={color} onSwipe={this.onSwipe} />
      </Transition>
    );
  }
}
