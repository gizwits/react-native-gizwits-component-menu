import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Image,
  View,
  Modal,
  SafeAreaView,
  UIManager,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MenuItem from './MenuItem';

const arrow = require('./lamp_operation_flow_arrow_sel.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maskView: {
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    // flex: 1,
    marginTop: 44 + 8 + (StatusBar.currentHeight ? StatusBar.currentHeight : 0),
    marginHorizontal: 10,
    // backgroundColor: 'rgba(0,255,255,0.2)',
    alignItems: 'flex-end',
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bg: {
    overflow: 'hidden',
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
  },
});

// data:[{icon,text,onPress}],lineCount:3
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.lineCount = 3;
    this.state = {
      width: 0,
    };
  }

    getData = (data, lineCount) => {

    }

    _onLayout = (e) => {
      UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
        if (width !== this.state.width) {
          this.setState({
            width,
          });
        }
      });
    }


    render() {
      const { data, visible, maskClick } = this.props;
      const { width } = this.state;
      const list = [];
      let line = parseInt(data.length / this.lineCount, 10);
      if (data.length % this.lineCount > 0) { line++; }
      for (let index = 0; index < line; index++) {
        const subArr = data.slice(index * this.lineCount, (index + 1) * this.lineCount);
        list.push(subArr);
      }
      const contentWidth = width - 20;
      const itemWidth = (width - 20) / this.lineCount;
      const bgWidth = data.length < 3 ? itemWidth * data.length : contentWidth;

      return (
        <Modal
          style={{ flex: 1 }}
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={() => {
            // 安卓上必填，默认不处理
          }}
        >
          <View style={styles.container} onLayout={this._onLayout}>
            <TouchableHighlight style={styles.maskView} activeOpacity={0} onPress={maskClick}>
              <SafeAreaView style={{ flex: 1 }}>
                <View style={{ ...styles.content, height: line * 100, width: contentWidth }}>
                  <Image source={arrow} style={{ width: 15, height: 15, right: 8, top: -13, position: 'absolute' }} />
                  <View style={{ ...styles.bg, width: bgWidth }}>
                    {list.map((arr, index) => {
                      return (<View style={{ ...styles.line, width: (arr.length * itemWidth) }} key={index}>
                        {
                          arr.map((item, subIndex) => {
                            return (<TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={item.onPress} key={index * 10 + subIndex}>
                              <MenuItem style={{ height: 100, itemWidth }} icon={item.icon} text={item.text} />
                            </TouchableOpacity>);
                          })
                        }
                      </View>);
                    })}
                  </View>
                </View>
              </SafeAreaView>
            </TouchableHighlight>
          </View>
        </Modal>
      );
    }
}

