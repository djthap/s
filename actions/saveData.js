import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveDataInSecureStorage=async(key,value)=>{
  const jsonData = JSON.stringify(value)
  console.log("Data is Saved", key,value,jsonData)
return   await SecureStore.setItemAsync(key, jsonData).then((res) => {
    return "Data Stored";

      });
}

export const getDataInSecureStorage=async(key)=>{
  let details={}
await SecureStore.getItemAsync(key).then((res) => {
   details = JSON.parse(res);
  
  return res
 
});
return details
}


export const storeData = async (key,value) => {
    try {
      console.log("Data is Saved", key,value)
const jsonData = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonData)
    } catch (e) {
      // saving error
    }
  }
  
  export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
       return null;
    }
}