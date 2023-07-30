import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import { StyleSheet, Text, Image, View, Button } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState, useEffect } from 'react'
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value = null) {
                AsyncStorage.setItem('alreadyLaunched', true);
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, []);

    if(isFirstLaunch == null){
        return null;
    } else if (isFirstLaunch == true) {
        return (
          <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Announcements" component={AnnouncementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        )
    } else {
        return (
          <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Announcements" component={AnnouncementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
