import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';
import firebase from 'firebase';

const screen_Width = Dimensions.get('window').width;

class SignupScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  // firebase signup method

  usersignup(mail, pass) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        this.props.navigation.replace('home');
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <View style={{marginTop: 10}}>
          <Image
            source={require('../flag.jpg')}
            style={{height: 200}}
            style={{width: screen_Width, height: 200, borderRadius: 30}}
          />
          <View style={{marginTop: 50}}>
            <TextInput
              label="Email"
              mode="outlined"
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({email: text});
              }}
            />
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) => {
                this.setState({password: text});
              }}
            />

            {/* signup method called in this button */}
            <Button
              mode="contained"
              style={{marginTop: 10, borderRadius: 30}}
              onPress={() =>
                this.usersignup(this.state.email, this.state.password)
              }>
              <Text style={{fontSize: 20}}>Sign Up</Text>
            </Button>

            {/* use "this.props.navigation.navigate('navi_name_from other component')" to use navigation in class instead of function*/}

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignupScreen;
