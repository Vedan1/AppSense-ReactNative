import { useEffect, useState } from "react"

const useAppwrite= (fn) =>{

    const [data,setData] = useState([])
    const [loading,isLoading] = useState(true)
  
  
  

    
    
      const fetchData = async () => {
        isLoading(true)
  
        try {
          const response = await fn()
          setData(response)
        } catch (error) {
          Alert.alert('error',error)
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
