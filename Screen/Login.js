import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
import { logIn } from "../actions/login.js";
import { saveDataInSecureStorage } from "../actions/saveData.js";

const Login = ({ navigation }) => {
  const [type, setType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handelLogin = async () => {
    setLoading(true)
    if (type != "" && type != "no" && username != "" && password != "") {
      
      return await logIn({
        type: type,
        username: username,
        password: password,
      }).then((data) => {

        if ((data.status != "success")) {
          setLoading(false)
          return Alert.alert(data.msg);
        } else {
          saveDataInSecureStorage("user", data).then(async(data) => {
            console.log("Data is Saved", data)
            // Alert.alert("Login Successful")
            setLoading(false)
          await  navigation.jumpTo("Dashboard")
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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg.wallpaper }}>
      <View style={styles.container}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.heading}>SatzyGrats</Text>
          <Text style={styles.heading2}>Express Gratitude</Text>
        </View>

        <View style={styles.Box}>
          <Text style={styles.text}>Sign in</Text>
          <Text
            style={{
              fontSize: 10,
              color: "white",
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            to get Started
          </Text>
          <View
            style={{
              backgroundColor: "#9d5235",
              height: 50,
              width: "100%",
              borderRadius: 50,
            }}
          >
            <Picker
              ref={pickerRef}
              style={{ color: "white", marginLeft: 30 }}
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
                value="Service Provider"
              />
            </Picker>
          </View>
          <View>
            <TextInput
              placeholderTextColor="#fff"
              style={styles.textInput}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor="#fff"
              onChangeText={setPassword}
              style={styles.textInput}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={{
              marginHorizontal: 50,
              marginTop: 10,
              color: "black",
              backgroundColor: "white",
              borderRadius: 25,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handelLogin}
          >
            {
              loading?   <ActivityIndicator size="large" color={"red"} />:  <Text style={{ color: theme.bg.highlight }}>Login</Text>
            }
          
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: "white" }}>
              Forget Your Password?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.jumpTo("SignUp", { owner: "Satya" })}
            >
              <Text style={{ fontSize: 12 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
      </View>
      <View
        style={{
          height: 300,

          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 200, width: 200, borderRadius: 10 }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginTop: 30,

    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  Box: {
    backgroundColor: theme.bg.highlight,
    height: 350,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 100,
    width: "75%",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 30,
    color: theme.bg.highlight,
  },
  heading2: {
    fontSize: 15,
    color: "#d24149",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#9d5235",
    height: 50,
    color: "#fff",
    width: "100%",
    borderRadius: 50,
    marginTop: 10,
    paddingLeft: 40,
  },
});
