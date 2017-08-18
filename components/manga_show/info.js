import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.image == null) {
      image = <Image
                style={styles.imageStyle}
                source={require('../../img/no-image-available.jpg')}
              />
    } else {
      image = <Image
                style={styles.imageStyle}
                source={{ uri: 'https://cdn.mangaeden.com/mangasimg/' + this.props.image }}
              />
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {image}
          <Text style={{fontWeight: 'bold'}}> Autore </Text>
          <Text> {this.props.author} </Text>
        </View>
        <View>
          <Text> {this.props.description} </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  imageStyle: {
    width: 150,
    height: 250
  }
};














// export default class Info extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     description: '',
  //     author: '',
  //     image: '',
  //     categories: [],
  //     chapters: []
  //   };
  // }
  
//   render() {
//     if (this.state.image == null) {
//       image = <Image
//                 style={styles.imageStyle}
//                 source={require('../../img/no-image-available.jpg')}
//               />
//     } else {
//       image = <Image
//                 style={styles.imageStyle}
//                 source={{ uri: 'https://cdn.mangaeden.com/mangasimg/' + this.state.image }}
//               />
//     }

//     return (
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           {image}
//           <Text style={{fontWeight: 'bold'}}> Autore </Text>
//           <Text> {this.state.author} </Text>
//           <Button
//             onPress={() => this.props.navigation.navigate('Chapters', {chapters: this.state.chapters})}
//           />
//         </View>
//         <View>
//           <Text> {this.state.description} </Text>
//         </View>
//       </View>
//     );
//   }

//   componentDidMount() {
//     return fetch('http://www.mangaeden.com/api/manga/' + this.props.navigation.state.params.id)
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           description: responseJson.description,
//           author: responseJson.author,
//           categories: responseJson.categories,
//           image: responseJson.image,
//           chapters: responseJson.chapters
//         });
//         console.log(this.state);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }

// const styles = {
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     marginLeft: 10,
//     marginRight: 10,
//     marginTop: 20
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     marginBottom: 20
//   },
//   imageStyle: {
//     width: 150,
//     height: 250
//   }
// };
