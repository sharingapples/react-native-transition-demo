import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Window from './Window';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  header: {
    fontSize: 36,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
  },
  buttonText: {
    fontSize: 18,
  }
});

class DemoPage extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onSwipe: PropTypes.func.isRequired,
  };

  render() {
    const { number, color, backColor, onSwipe } = this.props;

    return (
      <View style={[styles.container, { backgroundColor: backColor }]}>
        <Text style={styles.header}>
          Transition Demo
        </Text>
        <Text style={styles.text}>
          This demo consists of a transition within a transition.{'\n'}
          The images are transitioning at fixed interval with different transitions.{'\n'}
          Press the Next button to flip the entire page.{'\n'}
          See "Demo.js" and try applying different transition styles for the page. {'\n'}
          See "Window.js" to try different transitions for the images. {'\n'}
          A simple transition style 'Brooom.js' is available with the demo source. {'\n'}
        </Text>
        <Text style={styles.buttonText}>Page {number}</Text>
        <Window />
        <TouchableOpacity style={styles.button} onPress={onSwipe}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DemoPage;
