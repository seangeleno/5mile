/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class sixmile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
           Dude, this is so tight!
        </Text>
        <Text style={styles.el_mas_cabron}>
           We're gonna hack the shit out of this react app!
           {'\n'}
           Where do we go from here?
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
          {'\n'}
          Where do we go from here?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /*backgroundImage: "url('https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fuh6GGA3qGOo%2Fmaxresdefault.jpg&f=1')",*/
    backgroundColor: '#99ccff'
  },
  el_mas_cabron: {
    fontSize: 25,
    textAlign: 'center',
    color: '#e60073'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sixmile', () => sixmile);
