import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const handleAppStart = (appName) => {
    alert(`${appName} started`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => handleAppStart('App1')}>
        <Text style={styles.buttonText}>App1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button2]}
        onPress={() => handleAppStart('App2')}>
        <Text style={styles.buttonText}>App2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.button3]}
        onPress={() => handleAppStart('App3')}>
        <Text style={styles.buttonText}>App3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#ff6f61',
  },
  button2: {
    backgroundColor: '#6fbfff',
  },
  button3: {
    backgroundColor: '#61ff6f',
  },
});

export default App;
