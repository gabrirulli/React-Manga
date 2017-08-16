import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './components/home';
import MangaList from './components/manga_list';

const SideNavigator = DrawerNavigator({
  Home: {
    screen: Home
  },
  MangaList: {
    screen: MangaList
  },
});

const styles = {
  container: {
    marginTop: 10
  },
};

export default class App extends Component {
  render() {
    return (
      <SideNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

AppRegistry.registerComponent('ReactManga', () => App);
