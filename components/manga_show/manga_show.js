import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Info from './info';
import Chapters from './chapters';

export default class MangaShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      author: '',
      image: '',
      categories: [],
      chapters: []
    };
  }

  render() {
    const mangaId = this.props.navigation.state.params.id
    const title = this.props.navigation.state.params.title
    return (
      <ScrollableTabView>
        <Info tabLabel="Info"
          mangaId={mangaId}
          title={title}
          author={this.state.author}
          description={this.state.description}
          categories={this.state.categories}
          image={this.state.image}
        />
        <Chapters tabLabel="Capitoli" chapters={this.state.chapters} navigation={this.props.navigation} />
      </ScrollableTabView>
    );
  }

  componentDidMount() {
    return fetch('http://www.mangaeden.com/api/manga/' + this.props.navigation.state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          description: responseJson.description,
          author: responseJson.author,
          categories: responseJson.categories,
          image: responseJson.image,
          chapters: responseJson.chapters
        });
        // console.log(this.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
