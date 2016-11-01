/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import NavItem from './navitem.js'
import Dytt from './dytt.js'
import MyWeb from './myweb.js'
import Humor from './humor.js'
import MyCache from './cache.js'

export default class firstApp extends Component {

  _renderScene(route, navigator) {
      switch (route.name) {
        case 'dytt':
          return (<Dytt />);
        case 'mntp':
          return (<MyWeb uri='http://loveme.tpddns.cn/jsmm' back />);
        case 'fwjc':
          return (<MyWeb uri='http://loveme.tpddns.cn/status'/>);
        case 'nhdz':
          return (<Humor />);
        case 'clean':
          return (<MyCache />);
        case 'home':
          return(
            <View style={styles.container}>
             <NavItem img={require('./img/movie.png')} navigator={navigator} title="电影天堂" name="dytt"></NavItem>
             <NavItem img={require('./img/mm.png')} navigator={navigator} title="美女图片" name="mntp"></NavItem>
             <NavItem img={require('./img/nhdz.png')} navigator={navigator} title="内涵段子" name="nhdz"></NavItem>
             <NavItem img={require('./img/webcam.png')} navigator={navigator} title="服务监测" name="fwjc"></NavItem>
             <NavItem img={require('./img/clean.png')} navigator={navigator} title="缓存信息" name="clean"></NavItem>
            </View>
        );
        }
  }

  render() {

    return (
      <Navigator initialRoute={{title: '娱乐工厂', name: 'home'}}
        renderScene={this._renderScene}
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              {
                if (route.name === 'home') {
                  return null;
                }
                else {
                  return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                      <Image source={require('./img/back.png')}
                        style={styles.leftbtn} resizeMode='stretch'/>
                    </TouchableOpacity>);
                }
              },
              RightButton: (route, navigator, index, navState) =>
               {
                 return null;
               },
             Title: (route, navigator, index, navState) =>
               {
                    return (<Text style={styles.navbar}>{route.title}</Text>);
               },
           }}
           style={{backgroundColor: '#00a2ea'}}
         />
    }
      >

      </Navigator>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 10,
    marginTop: 70
  },
  navbar: {
    color: 'white',
    paddingTop: 10,
    fontSize: 18
  },
  leftbtn: {
    height: 40,
    width: 40,
    paddingTop: 20,
  },
});

AppRegistry.registerComponent('firstApp', () => firstApp);
