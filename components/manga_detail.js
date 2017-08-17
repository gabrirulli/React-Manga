import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './shared/card';
import CardSection from './shared/card_section';
import Button from './shared/button';

import MangaShow from './manga_show/manga_show';

export default class MangaDetail extends Component{
  render() {
    const manga = this.props.manga;

    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    if (manga.im == null) {
      image = <Image
                style={thumbnailStyle}
                source={require('../img/no-image-available.jpg')}
              />
    } else {
      image = <Image
                style={thumbnailStyle}
                source={{ uri: 'https://cdn.mangaeden.com/mangasimg/' + manga.im }}
              />
    }

    return (
      <View>
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              {image}
            </View>
            
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}> {manga.t} </Text>
              <Text> {manga.a} </Text>
            </View>
          </CardSection>

          <CardSection>
            <Button
              onPress={() => this.props.navigation.navigate('MangaShow', {id: manga.i, title: manga.t})}
            />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
