import React, { Component } from 'react';
import { ListView,
         Text,
         StyleSheet,
         View,
         RefreshControl
 } from 'react-native';

var uri = 'http://loveme.tpddns.cn/api/humor.json'

export default class Humor extends Component {

   //get data from api
   async getJokes() {
     try {
       let response = await fetch(uri, {'User-Agent': 'curl/7.38.0', headers: {'Cache-Control': 'no-cache'}});
       let responseJson = await response.json();
       return responseJson.data;
     } catch (error) {
       console.log(error);
       return [''];
     }
   }

   _renderContent() {
     this.getJokes().then((result) => {
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({dataSource: ds.cloneWithRows(result)});
     });
   }

   // Initialize the hardcoded data
   constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       refreshing: false,
       dataSource: ds.cloneWithRows([''])
     };

     //init the list content
     this._renderContent()
   }

   _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          backgroundColor: '#CCCCCC',
        }}
      />
    );
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this._renderContent();
    this.setState({refreshing: false});
  }

   render() {
     return (
       <View style={styles.container}>
          <ListView
           style={styles.lv}
           refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
           }
           dataSource={this.state.dataSource}
           renderRow={(rowData) => {return (<View><Text style={styles.rowcontent}>{rowData}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.smalltext}>{'来自: 糗事百科'}</Text>
                  <Text style={styles.smalltext}>{'浏览(100+)'}</Text>
                </View>

              </View>
           )}}
           renderSeparator={this._renderSeparator}
         />
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5,
    paddingTop: 65,
    paddingLeft: 10
  },
  lv: {
    flex: 1,
  },
  rowcontent: {
    paddingTop: 10,
    paddingLeft: 0
  },
  smalltext: {
    fontSize: 10,
    color: 'dimgray',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8
  }
}
)
