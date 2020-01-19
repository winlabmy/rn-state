import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Blink extends Component {
  componentDidMount() {
    setInterval(()=> (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }

  state = { isShowingText: true };
  
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return(
      <Text>{this.props.text}</Text>
    )
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 100}}>
        <Blink text='I love to blink' />
        <Blink text='Blinking is so great' />
        <Blink text='Im your father ' />
        <Blink text='I eat danger for breakfast' />
      </View>
    );
  }
}
