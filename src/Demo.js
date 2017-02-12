import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

// Import the transition library
import { createTransition, FlipX } from 'react-native-transition';

// Just helper method to get one of the random colors
import randomColor from './randomColor';

import DemoPage from './DemoPage';


// Create Transition component using FlipX transition
const Transition = createTransition(FlipX);

export default class Demo extends Component {
  state = {
    number: 1,
    color: randomColor(),
  }

  onSwipe = () => {
    this.setState({
      number: this.state.number + 1,
      color: randomColor(),
    }, () => {
      // Transition a page with new page number and a different background
      Transition.show(
        <DemoPage number={this.state.number} color='white' backColor={this.state.color} onSwipe={this.onSwipe} />,
      );
    });
  }

  render() {
    // Render an initial state
    return (
      <Transition duration={800} onTransitioned={(item) => console.log('Complete', item) }>
        <DemoPage number={1} color='white' backColor={'white'} onSwipe={this.onSwipe} />
      </Transition>
    );
  }
};
