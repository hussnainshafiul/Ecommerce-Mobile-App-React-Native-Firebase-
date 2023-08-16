import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import AppStack from './navigation/AppStack';
import OnboardingScreen from './screens/OnboardingScreen';
import ProductDetails from './components/products/ProductDetails';
import Cart from './screens/Cart';
import Wishlist from './screens/Wishlist';
import RegisterScreen from './screens/RegisterScreen';
import { firebase } from "./config";
import OrderScreen from './screens/OrderScreen';

const Stack = createNativeStackNavigator();
function App() {

 

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Dashboard" component={BottomTabNavigation} options={{ headerShown: false }}/>
      ) : (
        <>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        </>
      )}
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default function AppContainer() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <App />
    </NavigationContainer>
  );
}
