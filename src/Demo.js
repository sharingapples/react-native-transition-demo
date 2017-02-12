import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

import DemoPage from './DemoPage';
import { createTransition, Fade, FlipX, FlipY } from 'react-native-transition';
import randomColor from './randomColor';

const Transition = createTransition(FlipX);

export default class Demo extends Component {
  onSwipe = () => {
    this.setState({
      number: this.state.number + 1,
      color: randomColor(),
    }, () => {
      Transition.show(
        <DemoPage number={this.state.number} color='white' backColor={this.state.color} onSwipe={this.onSwipe} />,
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
      <Transition duration={800} onTransitioned={(item) => console.log('Complete', item) }>
        <DemoPage number={number} color='white' backColor={color} onSwipe={this.onSwipe} />
      </Transition>
    );
  }
}
