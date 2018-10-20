import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    paddingTop: 20,
    backgroundColor: 'blue',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'red',
  },
  number: {
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#424242',
    textAlign: 'right',
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  row: {

  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.number}>0</Text>
        <Text style={styles.number}>0</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="clear" />
        </View>
      </View>
    </View>
  );
};
export default App;