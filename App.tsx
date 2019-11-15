import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.description}>Search for houses here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
