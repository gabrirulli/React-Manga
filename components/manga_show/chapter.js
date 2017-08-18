import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import ImageViewer from 'ImageViewer';

export default class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy-facebook_s.jpg'],
      shown: true,
      curIndex: 0
    };
  }

  closeViewer() {
    this.setState({
        shown:false,
        curIndex:0
    })
  }

  render () {
    return(
      <ImageViewer shown={this.state.shown}
                   imageUrls={this.state.images}
                   onClose={this.closeViewer.bind(this)}
                   index={this.state.curIndex}>
      </ImageViewer>
    );
  }

  componentDidMount() {
    return fetch('http://www.mangaeden.com/api/chapter/' + this.props.navigation.state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        var imgArr = [];
        responseJson.images.map(image =>
          imgArr.unshift('http://cdn.mangaeden.com/mangasimg/' + image[1])
        );
        this.setState({
          images: imgArr
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

{/*<Text> CIAO </Text>*/}