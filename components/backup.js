import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function SigninScreen({navigation}) {
  state = {
    email: '',
    password: '',
  };
  return (
    <KeyboardAvoidingView>
      <Appbar.Header>
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <View style={{marginTop: 10}}>
        <Image
          source={require('./flag.jpg')}
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
          <TouchableOpacity onPress={() => navigation.navigate('sigup')}>
            <Text style={{textAlign: 'center', marginTop: 5}}>
              don't have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

function SignupScreen({navigation}) {
  state = {
    email: '',
    password: '',
  };
  return (
    <KeyboardAvoidingView>
      <Appbar.Header>
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>
      <View style={{marginTop: 10}}>
        <Image
          source={require('./flag.jpg')}
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
          <Button mode="contained" style={{marginTop: 10, borderRadius: 30}}>
            <Text style={{fontSize: 20}}>Sign Up</Text>
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate('sigin')}>
            <Text style={{textAlign: 'center', marginTop: 5}}>
              already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="sigup">
          <Stack.Screen name="sigup" component={SignupScreen} />
          <Stack.Screen name="sigin" component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
