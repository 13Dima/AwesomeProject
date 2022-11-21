import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Test from './Test.json'



export default function App() {

  return (

    <View style={styles.container}>
      {Test.map((obj) => {
        let str = []
        for (const [key, value] of Object.entries(obj)) {
          str.push(<Text >
            {key}: {value}
          </Text>)
        }
        return str
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



