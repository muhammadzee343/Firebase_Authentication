import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {
  componentDidMount() {
    this.unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('home');
      } else {
        this.props.navigation.navigate('SignIn');
      }
    });
  }

  // unsubcribe from componentDidMount to avoid memory leakege

  componentWillMount() {
    this.unsubscribeAuth();
  }

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
