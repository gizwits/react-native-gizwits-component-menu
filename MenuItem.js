import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // backgroundColor: 'rgba(255,0,255,0.3)',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  }
});

export default class MenuItem extends Component {
    _onPress = () => {
      const { onPress } = this.props;
      if (typeof onPress === 'function') onPress();
    }
    render() {
      const { icon, text, textStyle } = this.props;
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={this._onPress}
        >
          {icon ? <Image source={icon} style={styles.icon} /> : null}
          {typeof text === 'string' ?
            <Text style={textStyle || styles.text}>{text}</Text>
            : text
          }
        </TouchableOpacity>
      );
    }
}

