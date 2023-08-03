import { StatusBar } from 'expo-status-bar';
import {Data1} from './contextApi'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignIn from './screns/SignIn';
import Main from './screns/Main';
import MainAdmin from './screns/MainAdmin';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Data1>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen  name='signIn' component={SignIn}/>
          <Stack.Screen name='home' component={Main}/>
          <Stack.Screen name='admin' component={MainAdmin}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Data1>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:40
  },
});
