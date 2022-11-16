import React, { useRef, useState,useEffect } from "react";
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
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import theme from "../Config/theme.js";
import { GetProject } from "../actions/project.js";
import { getDataInSecureStorage } from "../actions/saveData.js";
export default function ProjectDescription({navigation}) {
  
      const [search, setSearch] = useState("");


      const [user, setUser] = useState("dsccsdcds");
      const [projects, setProjects] = useState([]);
      const [loading, setloading] = useState(false);
      useEffect(() => {
       let isCancelled =false
       async function getUser() {
        setloading(true)
       await getDataInSecureStorage("user").then(async(data) => {
          if(data!=null){
            console.log(data,"the projects22")
          await    setUser(data.user_details)
          await  GetProject(data.user_details.username).then((data2)=>{
              console.log(data2,"the projects223")
              setProjects(data2.projects )
    setloading(false)
            })
          }
          // setloading(false)
    
        });
      }
      if (!isCancelled) {
        getUser();
      }
    
        return () => {
          isCancelled = false;
        };
      }, []);
    

      const renderItem = ({ item }) => (
        <View style={[styles.embededBox]} key={item.project_id}>
          <TouchableOpacity style={styles.imageBox}  onPress={()=>navigation.navigate('ViewSubprojects')}>
           <View style={{width:"60%"}}>

            <Text style={{ color: "red", fontSize: 20 }}>{item.name}</Text>
            <Text style={{ color: "red", fontSize: 15 }}>{item.vendor_name}</Text>
            <Text style={{ color: "red", fontSize: 15 }}>Category</Text>
            <Text style={{ color: "red", fontSize: 15 }}>{item.address}</Text>
           </View>
          <View style={{width:"40%" ,justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity
                style={{
                  width: 100,
                  height:40,
                  marginBottom:10,
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={()=>navigation.navigate('AddSubProject')}
              >
                <Text style={{ color: "white",fontSize: 10  }}>Add Subproject</Text>
              </TouchableOpacity>
          <TouchableOpacity
                style={{
                  width: 100,
                  height:40,
                  marginBottom:10,
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
               
              >
                <Icon name="delete" size={20} color="white" />
              </TouchableOpacity>
              

          </View>

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
            <View style={{  justifyContent: "center",alignItems:"center",marginTop:10 }}>
              <Text style={{ fontSize: 30, color: "#fff" }}>Project Description!</Text>
            </View>
          </View>
          <View style={styles.middleBox}>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  height: 660,
                  paddingTop: 10,
                  borderRadius: 10,
                  position: "absolute",
                  top: -70,
                  zIndex:2
                }}
              >
         
    {
      loading==true?<ActivityIndicator style={{flex:1}} color={"red"} size={50}/>:<FlatList
      data={projects}
      renderItem={renderItem}
      keyExtractor={(item) => item.project_id}
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
      height: 230,
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
      height: 130,
      padding: 15,
      marginHorizontal: 20,
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
    
      flexDirection:"row",
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
      flex:1,
      backgroundColor: theme.bg.highlight,
      position: "relative",
    },
  });
  