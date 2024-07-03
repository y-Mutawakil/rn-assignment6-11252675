import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from "./components/HomeScreen";
import Cart from "./components/CartScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const images = {
  0: require("./assets/dress1.png"),
  1: require("./assets/dress2.png"),
  2: require("./assets/dress3.png"),
  3: require("./assets/dress4.png"),
  4: require("./assets/dress5.png"),
  5: require("./assets/dress6.png"),
  6: require("./assets/dress7.png"), 
  7: require("./assets/dress5.png"),
  8: require("./assets/dress6.png"),
  9: require("./assets/dress7.png"),
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="goldenrod" barStyle="light-content" translucent={false} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            initialParams={{ images }} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Cart" 
            component={Cart} 
            initialParams={{ images }} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
