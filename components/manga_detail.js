import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './shared/card';
import CardSection from './shared/card_section';
import Button from './shared/button';

import MangaShow from './manga_show/manga_show';

export default class MangaDetail extends Component{
  render() {
    console.log(this.props);
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
              onPress={() => this.props.navigation.navigate('MangaShow', {id: manga.i})}
              title="Go to manga show"
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

// const MangaDetail = ({ manga }) => {
//   // const { a, im, t, i } = manga;

//   console.log(manga);

//   const {
//     thumbnailStyle,
//     headerContentStyle,
//     thumbnailContainerStyle,
//     headerTextStyle,
//     imageStyle
//   } = styles;

//   if (manga.im == null) {
//     image = <Image
//               style={thumbnailStyle}
//               source={require('../img/no-image-available.jpg')}
//             />
//   } else {
//     image = <Image
//               style={thumbnailStyle}
//               source={{ uri: 'https://cdn.mangaeden.com/mangasimg/' + manga.im }}
//             />
//   }

//   return (
//     <Card>
//       <NavigatorStack ref={nav => { this.navigator = nav; }} />
//       <CardSection>
//         <View style={thumbnailContainerStyle}>
//           {image}
//         </View>
        
//         <View style={headerContentStyle}>
//           <Text style={headerTextStyle}> {manga.t} </Text>
//           <Text> {manga.a} </Text>
//         </View>
//       </CardSection>

//       <CardSection>
//         <Button
//           onPress={() => this.props.navigation.navigate('MangaShow', {id: manga.i})}
//           title="Go to manga show"
//         />
//       </CardSection>
//     </Card>
//   );
// };

// const NavigatorStack = StackNavigator({
//   MangaDetail: {
//     // path: 'manga_detail/:id',
//     screen: MangaDetail
//   },
//   MangaShow: {
//     screen: MangaShow
//   },
// });

// const styles = {
//   headerContentStyle: {
//     flexDirection: 'column',
//     justifyContent: 'space-around'
//   },
//   headerTextStyle: {
//     fontSize: 18
//   },
//   thumbnailStyle: {
//     height: 100,
//     width: 100
//   },
//   thumbnailContainerStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 10,
//     marginRight: 10
//   },
//   imageStyle: {
//     height: 300,
//     flex: 1,
//     width: null
//   }
// };

// export default MangaDetail;
