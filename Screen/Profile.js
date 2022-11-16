import React, { useRef, useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  KewboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  TouchableOpacity,
} from "react-native";

import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon5 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";
import KewboardAvoidViewWrap from "../Components/KewboardAvoidViewWrap.js";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import BankModal from "../Components/BankModal.js";
import { getDataInSecureStorage } from "../actions/saveData.js";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const Profile = () => {
  const [value, setValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const [user, setUser] = useState();
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
  
  return (
    <View style={styles.container}>
      <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
      <BankModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        styles={styles}
      />

      <View style={styles.Box}>
        <View style={{ flex: 1, marginTop: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "#fff" }}>Profile!</Text>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              height: 80,
              width: 80,
              marginVertical: 10,
            }}
          ></View>
          <Text style={{ fontSize: 20, color: "#fff" }}>{user!=undefined?user.name:"UserName"}</Text>
          <Text style={{ fontSize: 16, color: "#fff" }}>{user!=undefined?user.username:"UserName"}</Text>
        </View>
      </View>
      <View style={styles.middleBox}>
        <ScrollView style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={styles.user_box}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="user" size={30} color="black" />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20 }}>Name</Text>
              <TextInput
                placeholderTextColor="black"
                placeholder="Username"
              ></TextInput>
            </View>
          </View>
          <View style={styles.user_box}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon2 name="mail" size={30} color="black" />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20 }}>Email</Text>
              <TextInput
                placeholderTextColor="black"
                placeholder="Email"
              ></TextInput>
            </View>
          </View>
          <View style={styles.user_box}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon3 name="call" size={30} color="black" />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20 }}>Number</Text>
              <TextInput
                placeholderTextColor="black"
                placeholder="Number"
              ></TextInput>
            </View>
          </View>
          <View style={styles.user_box}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="user" size={30} color="black" />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20 }}>Bussiness Type</Text>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color="black"
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.user_box}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon4 name="lock" size={30} color="black" />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ fontSize: 20 }}>Password</Text>
              <TextInput
                secureTextEntry={true}
                placeholderTextColor="black"
                placeholder="******"
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              color: "white",
              marginTop: 20,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={require("../assets/icon/payment.png")}
              style={{ height: 200, width: 250, borderRadius: 10 }}
            ></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingDesign: {
    marginTop: 10,
    fontSize: 20,
  },

  Box: {
    backgroundColor: theme.bg.highlight,
    height: 250,
    width: "100%",

    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

    justifyContent: "center",
    alignItems: "center",
  },
  middleBox: {
    height: "75%",
  },
  user_box: {
    height: 60,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  user_box3: {
    height: 40,
    flexDirection: "row",
    // borderBottomColor: "grey",
    // borderBottomWidth: 1,
  },
  user_box2: {
    marginLeft: 58,

    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  dropdown: {
    // margin: 16,
    height: 30,
    flex: 1,

    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
    // backgroundColor: "black",
    // opacity: 0.7,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    zIndex: 9000,
    height: 500,
    width: "85%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    height: 70,
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
