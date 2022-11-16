import { View, Text, Touchable } from "react-native";
import React, { useState,useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import theme from "../Config/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { getDataInSecureStorage } from "../actions/saveData";


export default function CustomDrawer(props) {
  
  const [user, setUser] = useState(undefined);
  useEffect(() => {
   let isCancelled =false
   async function getUser() {
   await getDataInSecureStorage("user").then(async(data) => {
    if(data!=null){

      setUser(data.user_details)

  }


    });
  }
  if (!isCancelled) {
    console.log("first")
    getUser();
  }

    return () => {
      isCancelled = false;
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} /> */}
      <View
          style={{
            backgroundColor: theme.bg.highlight,
            paddingTop:20,
            height: 180,
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "40%" }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  height: 80,
                  width: 80,
                  marginVertical: 10,
                }}
              ></View>
            </View>
            <View style={{ width: "60%", justifyContent: "center" }}>
              <Text style={{ fontSize: 20, color: "#fff" }}>{user!=undefined?user.name:"UserName"}</Text>
              <Text style={{ fontSize: 16, color: "#fff" }}>{user!=undefined?user.username:"UserName"}</Text>
            </View>
          </View>
        </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#fff",marginTop:-27 }}
      >
        
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "black" }}>
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon name="sign-out" size={20} color="black" />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
