import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import MenuScreen from './components/MenuScreen';
import Headcounts from './components/Headcounts';
import QR from './components/QR';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{headerShown: false, animation: 'none'}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name= "Headcounts" component={Headcounts}/>
        <Stack.Screen name = "QR" component={QR}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


