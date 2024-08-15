import { Link } from 'expo-router';
import { router,Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from './components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
export default function Index() {

  const{isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href={'/home'} />

  return (                  
    // so that the content stays with phone specification. eg overlapping notch, pinhole camm,etc
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:"100%"}}>       
    {/* sometimes Content is greater than screen size so that's why SV*/}
    {/* The Classname series also changes the design. be careful*/}
        <View className='w-full justify-center items-center  min-h-[82vh] mt-10 px-4'>  
              <Image
              source={images.logo}
              className='w-[150px] h-[84px]'
              resizeMode='contain'
              />
              <Image 
              source={images.cards}
              className='max-w-[380px] h-[300px] w-full'
              resizeMode='contain'
              />
                      {/* We Need Relative Positioning to use Absolute positioning */}
              <View className='mt-5'> 
                <Text className='text-3xl text-white font-bold text-center'>
                  Discover Endless Possibilities with{' '}
                  <Text className='text-secondary-200'>
                  AORA
                  </Text>
                </Text>
                <Image 
                  source={images.path}
                  className='w-[136px] h-[15px] absolute -bottom-2 -right-8'      
                  // The -bottom and -right are used to set the element to it's place. 
                  resizeMode='contain'
                />
              </View>
              <View  className='justify-center'>
              <Text className='text-white text-sm mt-7 font-pregular text-center'>Manage your time and Sanity Efficiently. {'\n'} It's Quiet Exhaustible</Text>
              </View>
              <CustomButton 
                title='Continue with Email'
                handlePress={() => {router.push('/sign-in')}}
                containerStyles='w-full mt-7'
              />
        </View>
      </ScrollView>
      <StatusBar style='light' hideTransitionAnimation='fade' />  
      {/* backgroundColor='#161622' */}
    </SafeAreaView>
  ); 
}


