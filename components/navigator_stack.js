import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MangaList from './manga_list';
import MangaShow from './manga_show/manga_show';
import Chapters from './manga_show/chapters';
import Chapter from './manga_show/chapter';

const Navigator = StackNavigator({
  Home: {
    screen: MangaList,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  MangaShow: {
    screen: MangaShow,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`
    })
  },
  Chapter: {
    screen: Chapter,
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: 'white'
    })
  }
});

export default class NavigatorStack extends Component {
  static navigationOptions = {
    drawerLabel: 'Lista manga',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
    
  render() {
    return (
      <Navigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
