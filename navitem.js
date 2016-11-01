import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class NavItem extends Component {

  _onForward() {
    navigator = this.props.navigator;
    navigator.push({title: this.props.title, name: this.props.name})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.img}
        style={styles.smallimg} resizeMode='cover'></Image>
        <TouchableOpacity onPress={this._onForward.bind(this)}>
        <Text style={styles.smalltext}>{this.props.title}</Text>
        </TouchableOpacity>
        <Image style={styles.smallforward} resizeMode='cover' source={require('./img/next.png')} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  smallimg: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  smalltext: {
    fontSize: 18,
    width: 200,
    textAlignVertical: 'center',
    paddingLeft: 20,
  },
  smallforward: {
    width: 30,
    height: 30
  },
}
)
