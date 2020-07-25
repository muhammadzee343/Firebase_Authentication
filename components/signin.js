import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Appbar, TextInput, Button} from 'react-native-paper';

const screen_Width = Dimensions.get('window').width;

class SigninScreen extends Component {
  state = {
    email: '',
    password: '',
  };
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
              label="SignIn"
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
            <Button mode="contained" style={{marginTop: 10, borderRadius: 30}}>
              <Text style={{fontSize: 20}}>Sign In</Text>
            </Button>

            {/* use "this.props.navigation.navigate('navi_name_from other component')" to use navigation in class instead of function*/}

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{textAlign: 'center', marginTop: 5}}>
                don't have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SigninScreen;
