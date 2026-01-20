import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [randomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Arvaa numero väliltä 1-100');
  const [count, setCount] = useState(0);

  const makeGuess = () => {
    const userGuess = Number(guess);
    const newCount = count + 1;
    setCount(newCount);

    if(userGuess < randomNumber) {
      setMessage('Liian pieni! Yritä uudelleen.');
    } else if (userGuess > randomNumber) {
      setMessage('Liian suuri! Yritä uudelleen.');
    } else {
      setMessage(`Onneksi olkoon! Arvasit oikein ${newCount} yrityksellä.`);
    }

    setGuess('');
};

  return (
    <View style={styles.container}>
      <Text>{message}</Text>

      <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={guess}
      onChangeText={setGuess}
      />

      <Button title="Arvaa" onPress={makeGuess} />
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
  input: {
    borderWidth: 1,
    marginVertical: 10,
    width: 150,
    padding : 5,
  },
});
