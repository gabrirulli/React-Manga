import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.margin}>
        <Button
          onPress={() => this.props.navigation.navigate('MangaList')}
          title="Go to manga list"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 50
  },
  icon: {
    width: 24,
    height: 24,
  }
});
