import React, { useRef, useState } from "react";
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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import theme from "../Config/theme.js";
export default function ViewSubprojects({ navigation }) {
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
  const renderItem = ({ item }) => (
    <View style={[styles.embededBox]} key={item.value}>
      <TouchableOpacity style={styles.imageBox}>
        <View style={{ width: "70%" }}>
          <Text style={{ color: "black", fontSize: 13 ,paddingBottom:5 }}>SubProject Name</Text>
          <Text style={{ color: "black", fontSize: 13 ,paddingBottom:5  }}>
            Service Provider{" "}
          </Text>
          <Text style={{ color: "black", fontSize: 13 ,paddingBottom:5  }}>Dispatch Date</Text>
          <Text style={{ color: "black", fontSize: 13 ,paddingBottom:5  }}>Total Amount</Text>
          <Text style={{ color: "black", fontSize: 13 ,paddingBottom:5  }}>Commission</Text>
          <Text style={{ color: "black", fontSize: 13  ,paddingBottom:5 }}>Paid/Unpaid</Text>
        </View>
        <View
          style={{
            width: "30%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              margin: 10,
            }}
          >
            <Text style={{ color: "blue", fontSize: 15 }}>View</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" ,marginTop:20 }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                marginBottom: 10,
                color: "white",
                backgroundColor: "white",
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon2 name="edit" size={15} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                marginBottom: 10,
                color: "white",
                backgroundColor: "red",
                borderRadius: 25,
                marginLeft:10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon3 name="trash" size={15} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: 150,
              height: 33,
              marginBottom: 10,
              color: "white",
              backgroundColor: theme.bg.highlight,
              borderRadius: 20,
              marginTop:10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AddMaterial")}
          >
            <Text style={{ color: "white", fontSize: 12 }}>+ add material</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
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
      <View style={styles.middleBox}>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
                    {/* <View style={{backgroundColor:  theme.bg.wallpaper ,height:50,margin:5,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <TouchableOpacity
            style={{
              width: 80,
              height: 30,
              marginRight: 10,
              color: "white",
              backgroundColor: "red",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.jumpTo("AddMaterial", { owner: "Satya" })}
          >
            <Text style={{ color: "white", fontSize: 12 }}>All</Text>
          </TouchableOpacity>
                    <TouchableOpacity
            style={{
              width: 80,
              height: 30,
              marginRight: 10,
              color: "white",
              backgroundColor: "red",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.jumpTo("AddMaterial", { owner: "Satya" })}
          >
            <Text style={{ color: "white", fontSize: 12 }}>New</Text>
          </TouchableOpacity>
                    <TouchableOpacity
            style={{
              width: 80,
              height: 30,
              marginRight: 10,
              color: "white",
              backgroundColor: "red",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.jumpTo("AddMaterial", { owner: "Satya" })}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Pending</Text>
          </TouchableOpacity>
                    </View> */}

            <FlatList
              data={dropdown}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
            />
          </View>
        </View>
      </View>

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
    height: 50,
    width: "100%",
    zindex: 1,
    marginTop: 40,
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
  },
  middleBox: {
    flex: 1,
  },
  embededBox: {
    flex: 1,
    height: 170,
    padding: 5,
    paddingLeft:10,
    // backgroundColor: "#F5FCFF",
    backgroundColor: theme.bg.wallpaper,

    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    flex: 1,
    flexDirection: "row",
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
    height: 75,
    backgroundColor: theme.bg.highlight,
    position: "relative",
  },
});
