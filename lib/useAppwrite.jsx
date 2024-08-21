import { useEffect, useState } from "react"
import  Alert  from "react-native"

const useAppwrite= (fn) =>{

    const [data,setData] = useState([])
    const [loading,isLoading] = useState(true)
  
      const fetchData = async () => {
        isLoading(true)
  
        try {
          const response = await fn()
          setData(response)
        } catch (error) {
          Alert.Alert('error',error)
        }finally{
          isLoading(false)
        }
      }
      useEffect(()=>{
          fetchData()
    },[])
    const refetch = ()=>{fetchData()}
    return {data};
}
export default useAppwrite;
