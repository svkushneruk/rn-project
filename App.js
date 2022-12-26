import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      <RegistrationScreen/>
      {/* <Text>Open up App.js to start working on your sadasapp!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
