import React, { useRef, useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import Icon from "react-native-vector-icons/Entypo";
import { getDataInSecureStorage } from "../actions/saveData.js";

const Dashboard = ({navigation}) => {
  const [user, setUser] = useState("dsccsdcds");
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
    getUser();
  }

    return () => {
      isCancelled = false;
    };
  }, []);
  async function handleNavigation(){
   
    navigation.navigate("Project",{ name: 'Jane' })

   
  }
  
  return (
    <View style={styles.container}>
      
      <View style={styles.Box}>
        <View style={{flex:1}}>
        <View style={{alignItems:"flex-end",position:"absolute",right:1}}>

<TouchableOpacity
        style={{
          
          width: 80,
          height:40,
          marginTop:50,
          marginRight:10,
          color: "white",
          
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>navigation.openDrawer()}
        >
       <Icon name="menu" size={40} color="white" />
      </TouchableOpacity>
        </View>
          <View style={{flex:1 ,justifyContent:"center",marginLeft:40}}>


        <Text style={{fontSize:30,color:"#fff"}}>Welcome!</Text>
        <Text style={{fontSize:20,color:"#fff"}}>{user!=undefined?user.name:"UserName"}</Text>
        <Text style={{fontSize:20,color:"#fff"}}>{user!=undefined?user.username:"UserName"}</Text>
          </View>
        </View>
        
      </View>
      
      <View style={styles.middleBox}>
        <View style={{ flex: 1, marginHorizontal: 10  }}>
            <ScrollView style={{flex:1, position: "absolute", top: -40 }}>
               <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={handleNavigation}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/11605931.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 20 }}>Project</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total Project : 344
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={()=>navigation.jumpTo('ProjectsList', { owner: 'Satya' })}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/p-done2.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 17 }}>Report</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total Reports : 344
                        </Text>
                    </TouchableOpacity>
                </View>
             
                </View>
               
               <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={()=>navigation.jumpTo('ServiceProvider')}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/work.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 20 }}>Add Service Provider</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total ServiceProviders : 344
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={()=>navigation.jumpTo('ServiceProvider', { owner: 'Satya' })}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/processing-payment.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 17 }}>Payment Request</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total Payments : 344
                        </Text>
                    </TouchableOpacity>
                </View>
             
                </View>
               
               <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={()=>navigation.jumpTo('Profile', { owner: 'Satya' })}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/setting2.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 20 ,paddingHorizontal:10 }}>User Mangement</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total Users : 344
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.embededBox]}>
                    <TouchableOpacity
                        style={styles.imageBox}
                        onPress={()=>navigation.jumpTo('AddMaterial', { owner: 'Satya' })}
                    >
                        <View
                        style={styles.imageBox2}
                        >
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require("../assets/icon/vendor-screen/panding1.png")}
                        />
                        </View>
                        <Text style={{ color: "red", fontSize: 17 }}>Pakages</Text>
                        <Text style={{ color: theme.bg.highlight, fontSize: 10 }}>
                        Total Packages : 344
                        </Text>
                    </TouchableOpacity>
                </View>
             
                </View>
               
              
             
              
              
                    
         </ScrollView>
        </View>
      </View>
      <View style={styles.lastBox}></View>
      <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Box: {
    backgroundColor: theme.bg.highlight,
    height: "30%",
    width: "100%",
    zindex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: "relative",
    justifyContent:"center"
    
  },
  middleBox: {
    height: "65%",
  },
  embededBox: {
   width:"50%",
    height: 200,
    padding: 15,
   
    // borderRadius: 10,
    // margin: 10
  },
  imageBox:{
    flex: 1,
    backgroundColor: theme.bg.wallpaper,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
    },
  imageBox2:{
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
},
  lastBox: {
    height: "5%",
    backgroundColor: theme.bg.highlight,
  },
});
