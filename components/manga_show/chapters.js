import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import ImageViewer from 'ImageViewer';

export default class Chapters extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    return(
      <Text> CHAPTERS </Text>
    );
  }

  // componentDidMount() {
  //   return fetch('http://www.mangaeden.com/api/chapter/4e711cb0c09225616d037cc2/')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ mangaList: responseJson.manga });
  //       console.log(this.state.mangaList);
  //       // this.state.mangaList.map((manga) =>
  //       //   console.log(manga.im)
  //       // );
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
}