import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  };

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text style={styles.counter(counter)}>{counter}</Text>

      <View style={styles.buttonWrapper}>
        <Button onPress={increment} title="Increment" color="green" />
        <Button onPress={decrement} title="Decrement" color="red" />
      </View>
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
  counter: (value) => ({
    fontSize: 50,
    fontWeight: 'bold',
    color: value ? "green" : "red"
  }),
  buttonWrapper: {
    marginTop: 20,
    flexDirection: "row"
  },
});
