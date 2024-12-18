import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>TAMPILAN DI TENGAH LAYAR</Text>

      
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'red' }]} /> 
        <View style={[styles.box, { backgroundColor: 'green' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24,
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 50, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
  },
  box: {
    width: 100, 
    height: 100,
  },
});