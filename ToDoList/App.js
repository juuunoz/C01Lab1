import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDo from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
        <ToDo titles={["Do Laundry", "CSCB09 Lab 1"]} />
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
