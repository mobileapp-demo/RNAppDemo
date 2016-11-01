import React, { Component } from 'react';
import { Alert, View, Text, Image, StyleSheet, NativeModules } from 'react-native';
import Button from 'react-native-button';

var native = NativeModules.HttpCache;

export default class MyCache extends Component {
  constructor(props) {
    super(props);
    this.state = {
      http: 0,
      image: 0,
      size: 0
    };
    native.getHttpCacheSize((error, result) => {
      this.setState({http: parseInt(result/1000/1000)});
    });
  }

  _handlePress() {
    native.clearCache((error) => {});
    Alert.alert('缓存已被清除');
    native.getHttpCacheSize((error, result) => {
      this.setState({http: parseInt(result/1000/1000)});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>当前网络缓存：{this.state.http}{'MB'}</Text>
        <Text>当前图片缓存：{this.state.image}{'MB'}</Text>

        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'skyblue', marginTop: 30}}
          style={{fontSize: 20, color: 'white'}} onPress={() => this._handlePress()}>
          清理缓存
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 5,
    paddingTop: 65,
    paddingLeft: 10
  },
  cleanBtn: {
    flex: 0,
    alignSelf: 'flex-end',
    fontSize: 20,
    backgroundColor: 'cornflowerblue',
    width: 200,
    marginTop: 30,
    textAlign: 'center',
    color: 'white'
  }
}
)
