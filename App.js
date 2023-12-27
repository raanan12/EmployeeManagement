import { StatusBar } from 'expo-status-bar';
import {Data1} from './contextApi'
import { StyleSheet, Text, View ,I18nManager} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from './screns/SignIn';
import Main from './screns/Main';
import MainAdmin from './screns/MainAdmin';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Data1>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='signIn' component={SignIn} />
          <Stack.Screen name='home' component={Main} />
          <Stack.Screen name='admin' component={MainAdmin} />
        </Stack.Navigator>
      </Data1>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:40
  },
});
