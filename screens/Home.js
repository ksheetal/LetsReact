import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

 class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Sheetal</Text>
      </View>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});