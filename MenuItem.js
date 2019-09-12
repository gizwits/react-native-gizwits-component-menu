import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
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
    render() {
      const { icon, text, textStyle } = this.props;
      return (
        <View
          style={styles.button}
        >
          {icon ? <Image source={icon} style={styles.icon} /> : null}
          {typeof text === 'string' ?
            <Text numberOfLines={1} ellipsizeMode='tail' style={textStyle || styles.text}>{text}</Text>
            : text
          }
        </View>
      );
    }
}

