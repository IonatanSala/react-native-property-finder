'use-strict';

import React, {
  Component,
  NavigatorIOS,
  StyleSheet,
  Text
} from 'react-native';

import SearchPage from './SearchPage';

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text} >Hello World!</Text>
    )
  }
}

class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'PropertyFinder',
          component: SearchPage
        }}
      />
    )
  }
}

export default PropertyFinder
