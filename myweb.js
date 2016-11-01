import React, { Component } from 'react';
import { WebView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <View style={styles.container}>
      {
        this.props.back ? (
          <TouchableOpacity style={styles.backBtn} onPress={() => {this.refs.webview.goBack();}}>
            <Image source={require('./img/goback3.png')} style={styles.goback}/>
          </TouchableOpacity>
        ) : (null)
      }
      <WebView
        ref='webview'
        source={{uri: this.props.uri}}
        style={{marginTop: 20}}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    top: 70,
    left: 12,
    zIndex: 50,
  },
  goback: {
    width: 20,
    height: 20
  }
});
