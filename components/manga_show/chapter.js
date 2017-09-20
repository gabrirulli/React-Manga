import React, { Component } from 'react';
import Gallery from 'react-native-image-gallery';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  onSwipeRight() {
    alert("mannaggia");
  }

  render () {
    //const config = {
    //  velocityThreshold: 0.3,
    //  directionalOffsetThreshold: 80
    //};

    return(
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={this.state.images}
        pageMargin={20}
        onPageScroll={ (event) => {console.log(event.offset)} }
        onPageScrollStateChanged={ (state) => {console.log(state)} }
      />
    );
  }

  componentDidMount() {
    return fetch('http://www.mangaeden.com/api/chapter/' + this.props.navigation.state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        var imgArr = [];
        responseJson.images.map(image =>
          imgArr.unshift({source: {uri: 'http://cdn.mangaeden.com/mangasimg/' + image[1]}})
        );
        this.setState({
          images: imgArr
        });
        console.log(this.state.images.slice(-1)[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

//<GestureRecognizer
//  onSwipeRight={(state) => this.onSwipeRight(state)}
//  config={config}
//  style={{
//    flex: 1,
//    backgroundColor: "#fff"
//  }}
//  >
//</GestureRecognizer>