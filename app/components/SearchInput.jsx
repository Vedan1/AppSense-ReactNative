import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../../constants'


const SearchInput = ({title,otherStyles,keyboardType,placeholder,handleChangeText,value}) => {
  
  return (

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl  focus:border-secondary items-center flex-row
      space-x-4'>
        <TextInput
          className=' text-base mt-0.5 text-white font-pregular flex-1 space-x-4'
          keyboardType={keyboardType}
          onChangeText={handleChangeText}
          value={value}
          placeholder={"Search for a Video"}
          placeholderTextColor={'#fffa'}
        />

        <TouchableOpacity>
            <Image
            source={icons.search}
            className='w-5 h-5 '
            resizeMode='contain'
            />
        </TouchableOpacity>
    </View>
  )
}

export default SearchInput