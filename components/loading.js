import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container_style}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
export default LoadingScreen;
