import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false)

  const onPress = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <Button testID='abcc' onPress={onPress} title='abc' />
      {visible &&
        <Text testID='now-visible'>Open up App.js to start working on your app!</Text>
      }
      <StatusBar style="auto" />
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
