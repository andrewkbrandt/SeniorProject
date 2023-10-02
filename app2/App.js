import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import TopNavigationBar from './TopNavBar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <h1>Welcome to The Rock</h1>
      <Text>hi</Text>
      <StatusBar style="auto" /> */}
      <TopNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'top',
    //justifyContent: 'center',
  },
});
