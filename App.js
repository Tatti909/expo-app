import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const sum = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        Result: {result !== null ? result : ''}
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="First number"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Second number"
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={sum} />
        <Button title="-" onPress={subtract} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6A7F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 150,
    marginbottom: 10,
    padding: 5,
  },
  resultText:{
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});
