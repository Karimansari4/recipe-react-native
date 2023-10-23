import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home'
import Favorite from './Pages/Favorite'
import Detailes from './Pages/Detailes'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

const Main = () => {
  
  // const [favorite, setFavorite] = useState(AsyncStorage.getItem("favorite") ? JSON.parse(AsyncStorage.getItem("favorite")) : [])
  // console.log("favorite: ", );
  // AsyncStorage.setItem("favorite", JSON.stringify({name: "John"}))
  // console.log("favorite: ", JSON.parse(AsyncStorage.getItem("favorite")));
  // console.log();
  return (
    <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false}} component={Home} />
        
        <Stack.Screen name="favorite" options={{ headerShown: false}} component={Favorite} />

        <Stack.Screen name="details" options={{ headerShown: false}} component={Detailes} />
        
    </Stack.Navigator>
  )
}

export default Main