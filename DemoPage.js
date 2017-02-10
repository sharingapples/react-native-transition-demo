import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Button, PanResponder } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: 'black',
  },
});

class DemoPage extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onSwipe: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.addBubble(gestureState.x0, gestureState.y0);
      }
    });

    this.state = {
      bubbles: [],
    }
  }

  addBubble(x, y) {
    this.setState({
      bubbles: this.state.bubbles.concat({ x, y }),
    });
  }

  renderBubble = (bubble, idx) => {
    const { color } = this.props;
    const style = {
      position: 'absolute',
      left: bubble.x - 10,
      top: bubble.y - 10,
      width: 20,
      height: 20,
      backgroundColor: color,
      borderRadius: 10,
      elevation: 10,
    };

    return (
      <View key={idx} style={style} />
    );
  }

  render() {
    const { number, color, backColor, onSwipe } = this.props;
    const { bubbles } = this.state;

    const textStyles = { color, textAlign: 'center'};
    return (
      <View style={[styles.container, { backgroundColor: backColor }]} {...this._panResponder.panHandlers}>
        <View style={styles.board}>
          { bubbles.map(this.renderBubble)}
        </View>
        <Text style={textStyles}>
          A demo page.{'\n'}
          Touch on the white space to create unique bubbles on this page.{'\n'}
          Click on swipe to view another page via Transition.
        </Text>
        <Text style={textStyles}>Page {number}</Text>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
          <Button style={styles.button} title="Swipe" onPress={onSwipe}/>
        </View>
      </View>
    )
  }
}

export default DemoPage;
