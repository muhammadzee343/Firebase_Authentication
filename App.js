import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, Button, Appbar} from 'react-native-paper';
import sinup from './components/signup';
import sinin from './components/signin';
import LoadingScreen from './components/loading';
import HomeScreen from './components/Home';
import {firebaseConfig} from './config';
const screen_Width = Dimensions.get('window').width;

function SignUpScreen({navigation}) {
  return (
    <View style={{marginTop: 10}}>
      <Image
        source={require('./flag.jpg')}
        style={{width: screen_Width, height: 200, borderRadius: 30}}
      />
      <TextInput label="Email" mode="outlined" />
      <TextInput label="Password" mode="outlined" />
      <Button mode="contained" style={{marginTop: 5}}>
        <Text>Sign Up</Text>
      </Button>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={{textAlign: 'center', marginTop: 10}}>
          already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function SigninScreen({navigation}) {
  return (
    <View style={{marginTop: 10}}>
      <Image
        source={require('./flag.jpg')}
        style={{width: screen_Width, height: 200, borderRadius: 30}}
      />
      <TextInput label="Email" mode="outlined" />
      <TextInput label="Password" mode="outlined" />
      <Button mode="contained" style={{marginTop: 5}}>
        <Text>SignIn</Text>
      </Button>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={{textAlign: 'center', marginTop: 10}}>
          dont't have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="sinin">
          <Stack.Screen name="SignIn" component={sinin} />
          <Stack.Screen name="SignUp" component={sinup} />
          <Stack.Screen name="loading" component={LoadingScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
