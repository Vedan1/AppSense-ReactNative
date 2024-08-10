import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import {icons} from '../../constants'


const TabIcon=({icon,color,name,focused})=>{                            //it shows images on the bottom navigation Bar
    return(<View className={'items-center justify-center gap-1'}> 
        <Image 
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='h-6 w-6'
        />
        <Text className={`${focused? `font-psemibold`:`font-pregular`} text-xs`} style={{color:color}}>{name} </Text>
    </View>)
}


const TabsLayout = () => {                              //_layout layout's the tabs (loaded first) by expo and is parent as layout for folder
  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle:{
                backgroundColor:'#161622',               //used to style actual tab bar
                borderTopColor: '#232533',
                borderTopWidth:1,
                padding:5,
                height:60
            
            }
        }}

    >
        <Tabs.Screen 
          name='home'
             options={{
            title:'Home',
            headerShown:'false',
            tabBarIcon:({color,focused})=>(<TabIcon 
                
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
  
            />)
          }}
        />  
        <Tabs.Screen 
          name='bookmark'
             options={{
            title:'Bookmark',
            headerShown:'false',
            tabBarIcon:({color,focused})=>(<TabIcon 
                
                icon={icons.bookmark}
                color={color}
                name='Bookmark'
                focused={focused}
  
            />)
          }}
        />
        <Tabs.Screen 
          name='create'
             options={{
            title:'Create',
            headerShown:'false',
            tabBarIcon:({color,focused})=>(<TabIcon 
                
                icon={icons.plus}
                color={color}
                name='Create'
                focused={focused}
  
            />)
          }}
        />
        <Tabs.Screen 
          name='profile'
             options={{
            title:'Profile',
            headerShown:'false',
            tabBarIcon:({color,focused})=>(<TabIcon 
                
                icon={icons.profile}
                color={color}
                name='Profile'
                focused={focused}
  
            />)
          }}
        />
    </Tabs>   
   </>
  )
}

export default TabsLayout