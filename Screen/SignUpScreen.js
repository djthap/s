import React, { useRef, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import Button from "../Components/Button.js";
import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { saveDataInSecureStorage } from "../actions/saveData.js";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";

import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/Entypo";

import { BlurView } from "expo-blur";
import { SignUp } from "../actions/login.js";
export default function SignUpScreen({ navigation }) {
  const pickerRef = useRef();
  const [type, setType] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const [email, setemail] = useState("");
  const [gst, setgst] = useState("");
  const [loading, setLoading] = useState(false);

  const handelSignup = async () => {
    console.log(
      "enter",
      type,
      company_name,
      name,
      address,
      contact_no,
      email,
      gst
    );
    setLoading(true);
    if (
      type != "" &&
      type != "no" &&
      company_name != "" &&
      name != "" &&
      address != "" &&
      contact_no != "" &&
      email != "" &&
      gst != ""
    ) {
      return await SignUp({
        type: type,
        company_name: company_name,
        name: name,
        address: address,
        contact_no: contact_no,
        email: email,
        gst: gst,
      }).then((data) => {
        if (data.status != "success") {
          setLoading(false);
          return Alert.alert(data.msg);
        } else {
          console.log("Data is Saved", data);
          saveDataInSecureStorage("user", data).then(async (data2) => {
            console.log(data)
            setLoading(false);
            
            Alert.alert(data.msg ,`\n UserName :${data.user_details.username} \n Password:${data.user_details.password}`);
          });
        }
      });
    } else {
      Alert.alert(
        "Required*",
        "Please Select Correct Username password and Login Type"
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 22, color: "#fff" }}>Create Account!</Text>
        </View>
      </View>
      <View style={styles.middleBox}>
        <View style={styles.input_box}>
          <View style={{ flex: 1 }}>
            <Picker
              ref={pickerRef}
              style={{ color: "black", marginLeft: 30 }}
              itemStyle={{ paddingLeft: 10 }}
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            >
              <Picker.Item
                style={{ paddingLeft: 10 }}
                label="---Select your Login Type---"
                value="no"
              />
              <Picker.Item
                style={{ paddingLeft: 10 }}
                label="Vender"
                value="vendor"
              />
              <Picker.Item
                style={{ paddingLeft: 10 }}
                label="Service Provider"
                value="serviceprovice"
              />
            </Picker>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon name="user" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Name"
              onChangeText={setName}
              value={name}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon name="building" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Company Name"
              onChangeText={setCompany_name}
              value={company_name}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon2 name="location-pin" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Location"
              onChangeText={setaddress}
              value={address}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon name="phone" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Phone Number"
              keyboardType='numeric'
              maxLength={10} 
              onChangeText={setcontact_no}
              value={contact_no}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon3 name="email" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Email"
              onChangeText={setemail}
              value={email}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "grey",
                borderRadius: 50,
                width: 30,
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Icon3 name="bank" size={20} color="white" />
            </View>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Gst no"
              onChangeText={setgst}
              value={gst}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 50,
            marginTop: 30,
            color: "white",
            backgroundColor: "red",
            borderRadius: 25,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handelSignup}
        >
          <Text style={{ color: "white" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },

  Box: {
    backgroundColor: theme.bg.highlight,

    height: "10%",
    width: "100%",
    zindex: 1,

    position: "relative",
    justifyContent: "center",
  },
  placeholderStyles: {
    color: "grey",
  },
  numberCircle: {
    backgroundColor: "blue",
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  middleBox: {
    height: "85%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input_box: {
    backgroundColor: "#F5FCFF",
    height: 50,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: 20,
    elevation: 8,
  },
  text_box: {
    marginLeft: 25,
    color: "black",
    flex: 1,
  },
  search_box: {
    flexDirection: "row",
    color: "black",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  lastBox: {
    height: "5%",
    backgroundColor: theme.bg.highlight,
  },
  dropdownProject: {
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#F5FCFF",
  },
  dropdown: {
    backgroundColor: "#F5FCFF",
    borderWidth: 0,
    height: 50,
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
