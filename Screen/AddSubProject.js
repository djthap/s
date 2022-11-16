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
  FlatList,
  Platform,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import DateTimePicker from "@react-native-community/datetimepicker";

import theme from "../Config/theme.js";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { setAudioModeAsync } from "expo-av/build/Audio.js";

export default function AddSubProject() {
  let dropdown = [{ label: "dj", value: "33" }];

  const [data, setData] = useState([]);

  const [date, setDate] = useState(new Date());

  const [value, setValue] = useState(null);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate / getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes:" + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + "(" + fTime + ") ");
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <View style={{ flex: 1, marginLeft: 40 }}></View>
      </View>
      <View style={styles.middleBox}>
        <View style={styles.input_box}>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, paddingRight: 40 }}>
              SubProject Name
            </Text>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Subproject Name"
              onChangeText={setsearch}
              value={search}
            ></TextInput>
          </View>

          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, paddingRight: 40 }}>
              Service Provider
            </Text>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropdown}
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
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, paddingRight: 10 }}>
              Dispatch Date
            </Text>
            <View
              style={{
                marginLeft: 50,
                width: 130,
              }}
            >
              <Button title="Select Date" onPress={() => showMode("date")} />
            </View>

            {show && (
              <DateTimePicker
                mode="date"
                value={date}
                onChange={onChange}
                display="default"
              />
            )}
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                color: "white",
                backgroundColor: "red",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </TouchableOpacity>
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
    marginTop: 40,
  },

  Box: {
    backgroundColor: theme.bg.highlight,

    height: 70,
    width: "100%",
    zindex: 1,

    position: "relative",
    justifyContent: "center",
  },
  placeholderStyles: {
    color: "grey",
  },
  icon: {
    marginRight: 5,
  },

  middleBox: {
    height: 721,
    paddingHorizontal: 5,
  },
  input_box: {
    flex: 1,
  },
  text_box: {
    flex: 1,
    color: "black",
    borderColor: "grey",

    borderBottomWidth: 1,
  },
  text_box2: {
    width: "25%",
    color: "black",
    marginLeft: 10,
    borderColor: "grey",

    borderBottomWidth: 1,
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
    height: 50,
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
    backgroundColor: "red",
    height: 50,
    borderColor: "grey",

    borderBottomWidth: 1,
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
  dropdown: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,

    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
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
});
