import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import { white } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    paddingTop: 20,
    backgroundColor: '#2E5060',
  },
  bottom: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
    // backgroundColor: 'red',
  },
  number: {
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#2E5060',
    textAlign: 'right',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
          <Button text="pow" />
          <Button text="swap" />
          <Button text="/" />
        </View>
        <View style={styles.row}>
          <Button text="9" />
          <Button text="8" />
          <Button text="7" />
          <Button text="x" />
        </View>
        <View style={styles.row}>
          <Button text="6" />
          <Button text="5" />
          <Button text="4" />
          <Button text="-" />
        </View>
        <View style={styles.row}>
          <Button text="3" />
          <Button text="2" />
          <Button text="1" />
          <Button text="+" />
        </View>
        <View style={styles.row}>
          <Button text="0" />
          <Button text="." />
          <Button text="enter" />
        </View>
      </View>
    </View>
  );
};
export default App;