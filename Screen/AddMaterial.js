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
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import DocumentPicker, { types } from "react-native-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import theme from "../Config/theme.js";
// import Button from "../Components/Button.js";
import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from 'expo-image-picker';

import { BlurView } from "expo-blur";

export default function AddMaterial({navigation}) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState();
  const [payment, setPayment] = useState();
  let dropdown = [
    { label: "dj", value: "33" },
    { label: "dj2", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "dj3", value: "33" },
    { label: "djccc3", value: "33" },
  ];

  const [data, setData] = useState([]);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const [value, setValue] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const [inputval, setinputval] = useState({
    Material: "",
    amount: 0,
  });
  const { Material, amount } = inputval;

  const deleteItemById = (id, amount) => {
    console.log(id);
    const filteredData = data.filter((item) => item.value !== id);
    console.log(filteredData);
    setTotalAmount(`${Number(totalAmount) - amount}`);
    setData(filteredData);
  };
  const changeAmount = (e) => {
    let d = { ...inputval };

    d.amount = Number(e);
    setinputval(d);
  };

  const changeItem = (e, field) => {
    console.log(e, field, inputval);
    let d = { ...inputval };
    d.Material = e;
    setinputval(d);
  };

  const addItem = () => {
    console.log(inputval, data.length + 1);
    let item = { ...inputval, value: data.length + 1 };
    console.log(item);
    setTotalAmount(`${Number(totalAmount) + item.amount}`);
    console.log(totalAmount);
    setData([...data, item]);

    setinputval({
      Material: "",
      amount: "0",
    });
  };


  
  const [date, setDate] = useState(new Date());

 
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

  const showMode = async(currentMode) => {
    setShow(true);
   
  };


  const renderItem = ({ item }) => (
    <View
      style={{
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
      key={item.value}
    >
      <TouchableOpacity
        style={{
          // width: 100,
          height: 60,
          color: "white",
          backgroundColor: "green",
          borderRadius: 10,
          paddingHorizontal: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => deleteItemById(item.value, item.amount)}
      >
        <Text style={{ color: "white" }}> {item.Material}</Text>
        <Text style={{ color: "white" }}>Amount : {item.amount}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <View style={{ flex: 1, marginLeft: 40 }}>
        <View style={{alignItems:"flex-end",position:"absolute",right:1}}>

<TouchableOpacity
        style={{
          
          width: 80,
          height:40,
          marginTop:10,
          marginRight:10,
          color: "white",
          
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>navigation.openDrawer()}
        >
       <Icon2 name="menu" size={40} color="white" />
      </TouchableOpacity>
        </View>
        </View>
      </View>
      <ScrollView style={styles.middleBox}>
        <View style={styles.input_box}>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, marginRight: 90 }}> Id</Text>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Service Provider Id"
            ></TextInput>
          </View>

          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, marginRight: 65 }}>Name</Text>

            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Service Provider Name"
            ></TextInput>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, paddingRight: 35,paddingTop:14 }}>Category</Text>
<View style={{flex:1 ,height:20}}>

            <Picker
              ref={pickerRef}
              style={{ color: "black" }}
              itemStyle={{ paddingBottom:40 }}
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) =>
                setCategory(itemValue)
              }
            >
              <Picker.Item  style={{paddingLeft: 10}} label="Select Category" value="java" />
              <Picker.Item style={{paddingLeft: 10}} label="Vender" value="js" />
              <Picker.Item style={{paddingLeft: 10}} label="Service Provider" value="33" />
            </Picker>
</View>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 17, paddingRight: 35,paddingTop:14 }}>Payment</Text>
<View style={{flex:1 ,height:20}}>

            <Picker
              ref={pickerRef}
              style={{ color: "black" }}
              itemStyle={{ paddingBottom:40 }}
              selectedValue={payment}
              onValueChange={(itemValue, itemIndex) =>
                setPayment(itemValue)
              }
             
            >
              <Picker.Item  style={{paddingLeft: 10}} label="Select Payment" value="java" />
              <Picker.Item style={{paddingLeft: 10}} label="Paid" value="paid" />
              <Picker.Item style={{paddingLeft: 10}} label="UnPaid" value="unpaid" />
            </Picker>
</View>
          </View>
         
          <View
            style={{
              marginHorizontal: 30,
              height: 150,
              marginTop: 60,
              position: "relative",
              borderColor: "black",
              borderWidth: 2,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                backgroundColor: "red",
                position: "absolute",
                top: -13,
                left: 40,
                padding: 3,
                borderRadius: 2,
              }}
            >
              Add Material
            </Text>
            <View style={{ flexDirection: "row", marginTop: 15, height: 45 }}>
              <TextInput
                style={styles.text_box2}
                placeholderTextColor="black"
                onChangeText={(e) => changeItem(e, "amount")}
                placeholder="Material"
                value={Material}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                style={styles.text_box2}
                onChangeText={(e) => changeAmount(e, "amount")}
                placeholderTextColor="black"
                placeholder="Amount"
                value={amount}
              ></TextInput>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 30,
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => addItem()}
                >
                  <Text style={{ color: "white" }}>+Add More</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1, padding: 15 }}>
              <View style={{ flex: 1 }}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.value}
                  horizontal={true}
                />
              </View>
            </View>
          </View>
          <View  style={{
              paddingHorizontal: 30,
              marginTop: 20,
              flexDirection: "row",
            }}>
 <Text style={{ fontSize: 17, paddingRight: 35,paddingTop:14 }}>Category</Text>
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
          {
           payment=="paid"?
           <View> 
             <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 13, paddingRight: 43 }}>
              Reciept Upload
            </Text>

            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                color: "white",
                backgroundColor: "grey",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={pickImage}
            >
              <Text style={{ color: "white" }}>Upload File</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 13, paddingRight: 43 }}>Total Amount</Text>

            <TextInput
              keyboardType="numeric"
              style={styles.text_box}
              value={totalAmount}
              placeholderTextColor="black"
              placeholder="Amount"
            ></TextInput>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 13, paddingRight: 60 }}>Comission</Text>

            <TextInput
              style={styles.text_box}
              keyboardType="numeric"
              placeholderTextColor="black"
              placeholder="323"
            ></TextInput>
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 13, paddingRight: 13 }}>
              Comission Amount
            </Text>

            <TextInput
              style={styles.text_box}
              keyboardType="numeric"
              placeholderTextColor="black"
              placeholder="2.00"
            ></TextInput>
          </View></View>:null
          }
        
          <View
            style={{
              flex: 1,
           
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                marginTop:25,
                marginBottom:25,
                color: "white",
                backgroundColor: "red",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => addItem()}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingBottom:25
    
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
