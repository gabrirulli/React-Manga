import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import ImageViewer from 'ImageViewer';

export default class Chapters extends Component {
  constructor(props) {
    super(props);
  }

  renderChapters() {
    return this.props.chapters.map(chapter =>
      <TouchableOpacity key={chapter[3]} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Chapter', {id: chapter[3]})}>
        <Text style={styles.textStyle}> {chapter[2]} </Text>
      </TouchableOpacity>
    );
  }

  render () {
    // console.log(this.props);
    return(
      <ScrollView>
        {this.renderChapters()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderTopWidth: 1,
    borderColor: '#000',
  }
};