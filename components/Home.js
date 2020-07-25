import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import firebase from 'firebase';

class HomeScreen extends Component {
  state = {
    email: '',
  };

  componentDidMount() {
    {
      /* check if user exist then change the state and set email from firebase to state variable and show on screen */
    }

    this.unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({email: user.email});
      } else {
        this.props.navigation.replace('SignIn');
      }
    });
  }

  // unsubcribe from componentDidMount to avoid memory leakege
  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  // signout method
  userSignOut() {
    firebase
      .auth()
      .signOut()
      .catch((err) => {
        Alert.alert(err, message);
      });
  }

  render() {
    return (
      <View style={styles.container_style}>
        <Text style={{justifyContent: 'center'}}>
          you are loged in as {this.state.email}
        </Text>
        <Button
          mode="contained"
          style={{marginTop: 10, borderRadius: 30}}
          onPress={() => this.userSignOut()}>
          <Text style={{fontSize: 20}}>LogOut</Text>
        </Button>
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
export default HomeScreen;
