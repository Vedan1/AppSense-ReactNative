import { View, Image,Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../components/FormField'

import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'


const SignUp = () => {

  const[form,setForm] = useState({
    usename:'',
    email: '',
    password: '',
  
  })

  const [isSubmitting, setIsSubmitting] = useState(true)


  const submit=()=>{

  }
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center  min-h-[85vh]  px-6 my-6'>
        <Image
        source={images.logo}
        className = 'w-[115px] h-[35px]'
        resizeMode='contain'
        />
          <Text className='text-2xl  mt-10 font-bold text-white'>Welcome</Text>
          <Text className='text-lg font-medium text-white mt-1'>Sign Up to Continue</Text>
          
          <FormField 
          title='Username'
          value={form.username}
          handleChangeText={(e)=>setForm({
            ...form, username:e
          })}
          otherStyles='mt-10'
          // keyboardType='email-address'
        />
        <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e)=>setForm({
            ...form, email:e
          })}
          otherStyles='mt-7'
          keyboardType='email-address'
        />

        <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e)=>setForm({
            ...form, password: e
          })}
          otherStyles='mt-7'
          keyboardType='password'
        />

        <CustomButton 
          title='Sign Up' 
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}
        />
        <View className='items-center justify-center mt-5 flex-row '>
          <Text className='text-gray-100 text-base font-pregular' >Already have an Account?</Text>
          <Link className='text-secondary text-base font-psemibold' href={'/sign-in'}> Sign-In </Link>
        </View>

        </View>   
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp