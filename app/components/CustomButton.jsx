import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles,textStyles }) => {
  return (
    <TouchableOpacity className={`bg-secondary rounded-xl min-h-[50px] items-center justify-center  p-3 ${containerStyles} `} 
        onPress={handlePress}
        // disabled={isLoading}
        activeOpacity={0.7}
        // style={[containerStyle, isLoading && {opacity: 0.5}]}
  
    
    >
      <Text className='font-psemibold text-primary text-lg'>{title}</Text>
      
    </TouchableOpacity>
  )
}

export default CustomButton