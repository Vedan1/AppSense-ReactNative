import { StyleSheet, Text, View } from 'react-native'
import { Link, Slot,SplashScreen,Stack } from 'expo-router'
import {useFonts} from 'expo-font'
import { useEffect } from 'react'
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
const [fontsLoaded,error]=useFonts({
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),

})


  useEffect(()=>{
    if(error) throw error;                        //to Load up fonts 
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null ;


  return (
    <>
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />    
    </Stack>
    </>

  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})