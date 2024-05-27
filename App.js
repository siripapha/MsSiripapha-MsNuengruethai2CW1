import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// GreetingComponent: Functional Component
const GreetingComponent = ({ name }) => {
  return (
    <View style={styles.greetingContainer}>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

// CounterComponent: Functional Component with State
const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.counterContainer}>
      <Text>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementCount} />
        <Button title="Decrement" onPress={decrementCount} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* GreetingComponent with props */}
      <GreetingComponent name="React Native" />

      {/* CounterComponent with state */}
      <CounterComponent />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingContainer: {
    marginBottom: 20,
  },
  counterContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
