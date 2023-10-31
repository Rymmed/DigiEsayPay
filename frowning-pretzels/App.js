
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Subscribe from "./screens/Subscribe";
import LoginScreen from "./screens/LoginScreen";
import nav from "./screens/nav";
const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="nav" component={nav} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}