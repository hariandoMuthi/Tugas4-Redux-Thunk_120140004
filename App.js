import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/home_page';
import Detail from './screen/detail_page';
import Edit from './screen/redux_thunk';
const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
        <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}