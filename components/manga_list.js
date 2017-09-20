import React, { Component } from 'react';
import {
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import MangaDetail from './manga_detail';
import MangaShow from './manga_show/manga_show';

export default class MangaList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      mangaList: [],
      pageToRender: 0,
      canLoadMoreContent: true,
      dataSource: ds.cloneWithRows([]),
    };
  }

  renderManga() {
    return this.state.mangaList.map(manga =>
      <MangaDetail key={manga.a} manga={manga} navigation={this.props.navigation} />
    );
  }

  _loadMoreContentAsync = async () => {
    this.setState({ pageToRender: this.state.pageToRender + 1 })
    return fetch('http://www.mangaeden.com/api/list/1/?p=' + this.state.pageToRender + '&l=25')
      .then((response) => response.json())
      .then((responseJson) => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ mangaList: this.state.mangaList.concat(responseJson.manga) });
        this.setState({ dataSource: ds.cloneWithRows(this.state.mangaList) });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <ListView
        renderScrollComponent={props => <InfiniteScrollView {...props} />}
        dataSource={this.state.dataSource}
        renderRow={(manga) => <MangaDetail key={manga.a} manga={manga} navigation={this.props.navigation} />}
        canLoadMore={this.state.canLoadMoreContent}
        onLoadMoreAsync={this._loadMoreContentAsync}
      />
    );
  }

  componentDidMount() {
    // Manga List splitted in pages => http://www.mangaeden.com/api/list/1/
    // Manga List splitted in pages with variable page size => http://www.mangaeden.com/api/list/1/?p=1&l=25
    // return fetch('http://www.mangaeden.com/api/list/1/')
    return fetch('http://www.mangaeden.com/api/list/1/?p=0&l=25')
      .then((response) => response.json())
      .then((responseJson) => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          dataSource: ds.cloneWithRows(responseJson.manga),
          mangaList: responseJson.manga
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = {
  container: {
    marginTop: 25,
    backgroundColor: '#fff'
  }
};

{/*<FlatList
  style={styles.container}
  data={this.state.mangaList}
  keyExtractor={this._keyExtractor}
  renderItem={({item}) => <MangaDetail manga={item} navigation={this.props.navigation} />}
/>*/}

      // <ScrollView style={styles.container}>
      //   {this.renderManga()}
      // </ScrollView>