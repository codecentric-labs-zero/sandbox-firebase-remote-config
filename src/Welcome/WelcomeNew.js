import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WelcomeNew extends React.Component {

  render() {
    return (
      <Text style={styles.text}>New fun page!!!</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'red',
  }
});
