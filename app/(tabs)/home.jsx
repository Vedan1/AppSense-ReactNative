import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Tabs } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../components/SearchInput'
import Trending from '../components/Trending'
import EmptyState from '../components/EmptyState'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../components/VideoCard'


const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const {data: posts} = useAppwrite(getAllPosts);
  
  const onRefresh=async ()=>{
  setRefreshing(true);
  setRefreshing(false);
}
  console.log(posts)
  return (
<>
    <SafeAreaView className='bg-primary h-full' >
      <FlatList 
       data={posts}
      //  data={[]}
       keyExtractor={(item)=>item.$id}
      renderItem={({item})=>(<VideoCard video={item}/>)}

      ListHeaderComponent={()=>(
        <View className='my-6 px-4 space-y-6'>
          <View className='justify-between items-start flex-row mb-6'>
            <View >
              <Text className='font-pmedium text-sm text-gray-100'>Welcome Back</Text>
              <Text className='font-psemibold text-xl text-white'>Vedant Pingale</Text>
            </View>
            <View className='mt-1.5'>
              <Image
              source={images.logoSmall}
              className='w-9 h-10'
              resizeMode='contain'
              />
            </View>
          </View>
          <SearchInput />
          <View className='w-full flex-1 pt-5 pb-8'>
            <Text className='text-gray-100 text-lg font-pregular'>Latest Videos</Text>
            <Trending posts={[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]?? []}/> 
                                                                {/* if no data, return [] blank array */}
          </View>
        </View>
      )}
      ListEmptyComponent={()=>{
        return  <EmptyState
          title={"No Videos Found"}
          subtitle={"Create Your own Custom Video Content"}
        />
      }}
   
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView> 
   </>
  )
}

export default Home