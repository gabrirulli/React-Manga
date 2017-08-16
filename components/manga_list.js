import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MangaDetail from './manga_detail';
import MangaShow from './manga_show/manga_show';

export default class MangaList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mangaList: []
    };
  }

  static navigationOptions = {
    drawerLabel: 'Lista manga',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  renderManga() {
    return this.state.mangaList.map(manga =>
      <MangaDetail key={manga.a} manga={manga} />
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderManga()}
      </ScrollView>
    );
  }

  componentDidMount() {
    // Manga List splitted in pages => http://www.mangaeden.com/api/list/1/
    // Manga List splitted in pages with variable page size => http://www.mangaeden.com/api/list/1/?p=1&l=25
    return fetch('https://www.mangaeden.com/api/list/1/?p=1&l=25')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ mangaList: responseJson.manga });
        console.log(this.state.mangaList);
        // this.state.mangaList.map((manga) =>
        //   console.log(manga.im)
        // );
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  icon: {
    width: 24,
    height: 24,
  }
});
