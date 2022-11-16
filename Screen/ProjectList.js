import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import { getDataInSecureStorage } from "../actions/saveData.js";
import { GetProject } from "../actions/project.js";

export default function ProjectList({route,navigation}) {

  let dropdown = [
    { label: "Project 1", value: "1" },
    { label: "Project 1", value: "2" },
    { label: "Project 1", value: "3" },
    { label: "Project 1", value: "4" },
    { label: "Project 1", value: "5" },
    { label: "Project 1", value: "6" },
    { label: "Project 1", value: "7" },
    { label: "Project 1", value: "8" },
    { label: "Project 1", value: "9" },
    { label: "djccc3", value: "33" },
  ];
  const [search, setSearch] = useState("");

  const [user, setUser] = useState("dsccsdcds");
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
   let isCancelled =false
   async function getUser() {
    setloading(true)
   await getDataInSecureStorage("user").then(async(data) => {
      if(data!=null){

          setUser(data.user_details)
        GetProject(data.user_details.username).then((data)=>{
          console.log(data,"the projects")
          setProjects(data.projects )
setloading(false)
        })
      }
      setloading(false)

    });
  }
  if (!isCancelled) {
    getUser();
  }

    return () => {
      isCancelled = false;
    };
  }, []);

  const renderItem = ({ item ,i}) => (

    <View style={[styles.embededBox]} key={item.project_id}>
      <TouchableOpacity style={styles.imageBox}     onPress={()=>navigation.navigate('ProjectDescription')}>
       
        <Text style={{ color: "red", fontSize: 20 }}>{item.name}</Text>
      
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
      <View style={{flexDirection:"row" ,marginTop:30,height:50}}>

<View
style={{
  width: "15%",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
}}
>
<TouchableOpacity
  style={{
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  }}
  onPress={() => navigation.openDrawer()}
>
  <Icon2 name="menu" size={25} color="white" />
</TouchableOpacity>
</View>
<View style={{ width: "65%", height: 50 }}>
<View
  style={{
    flex: 1,
    backgroundColor: "#fff",
    flex: 1,
    margin: 8,
    borderRadius: 7,
  }}
>
  <TextInput
    placeholderTextColor="#grey"
    onChangeText={setSearch}
    style={{
      backgroundColor: "#fff",
      flex: 1,
      margin: 8,
      borderRadius: 7,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    }}
    value={search}
    placeholder="Search All Project"
  />
</View>
</View>
<View
style={{
  width: "20%",
  height: 50,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}}
>
<Icon3 name="filter" size={25} color="grey" />
<Text style={{ fontSize: 18 }}>Filter</Text>
</View>
  </View>
        <View style={{ flex: 1, justifyContent: "center",alignItems:"center" }}>
          <Text style={{ fontSize: 30, color: "#fff" }}>ProjectList!</Text>
        </View>
        <View style={{flex:1,alignItems:"flex-end"}}>

       
                </View>
      </View>
      <View style={styles.middleBox}>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              height: 630,
              paddingTop: 10,
              borderRadius: 10,
              position: "absolute",
              top: -70,
            }}
          >
     {
      loading?<View style={{justifyContent:"center",alignItems:"center",flex:1}}><ActivityIndicator color={"red"} size={50}/></View>:<FlatList
      data={projects}
      renderItem={renderItem}
      keyExtractor={(item) => item.value}
    />
     }
            
            
          </View>
        </View>
      </View>
      <View style={styles.lastBox}></View>
      <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Box: {
    backgroundColor: theme.bg.highlight,
    height: 250,
    width: "100%",
    zindex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: "relative",
   
  },
  middleBox: {
    height: "65%",
  },
  embededBox: {
    flex: 1,
    height: 55,
    padding: 15,
    // backgroundColor: "#F5FCFF",
    backgroundColor: theme.bg.wallpaper,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    flexDirection:"row"
  },
  imageBox: {
    flex: 1,
    backgroundColor: theme.bg.wallpaper,
    borderRadius: 25,
 
  },
  imageBox2: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  lastBox: {
    height: 55,
    backgroundColor: theme.bg.highlight,
  },
});
