import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/Home";
import OnboardScreen from "../screens/Onboard";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import ProfileScreen from "../screens/Profile/ProfileScreen";
// import LoginScreen from "../screens/Login";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="/"
          component={OnboardScreen}
          options={{ title: "Onboard" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: " Welcome To Your Home" }}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: " Welcome To Login Page" }}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: " Welcome To SignUp Page" }}
        />
          <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: " Welcome To Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
