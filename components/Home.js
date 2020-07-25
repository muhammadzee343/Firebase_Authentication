import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container_style}>
        <Text>you are loged in</Text>
        <Button mode="contained" style={{marginTop: 10, borderRadius: 30}}>
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
