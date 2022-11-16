import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../Config/theme.js";
import Button from "../Components/Button.js";
import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import { BlurView } from "expo-blur";
import { CreateProject, SearchServiceProvider } from "../actions/project.js";
import { getDataInSecureStorage } from "../actions/saveData.js";
const AddProject = ({navigation}) => {
  const pickerRef = useRef();
  const [projectOpen, setProjectOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [search, setsearch] = useState("");
  const [service_provider, setservice_provider] = useState();
  const [searchList, setsearchList] = useState([]);
  const [loading, setloading] = useState(false);
  const [loadingText, setloadingText] = useState("Search Service Provider");
  const [service_provider_username, setservice_provider_username] =
    useState("Service Id");
  const [projectType, setProjectType] = useState("");

  const [companyOpen, setCompanyOpen] = useState(false);

  const [user, setUser] = useState(undefined);
  useEffect(() => {
    let isCancelled = false;
    async function getUser() {
      await getDataInSecureStorage("user").then(async (data) => {
        if (data != null) {
          setUser(data.user_details);
        }
      });
    }
    if (!isCancelled) {
      console.log("first");
      getUser();
    }

    return () => {
      isCancelled = false;
    };
  }, []);

  const handleSearch = () => {
    setloading(true);
    SearchServiceProvider(search).then((data) => {
      if (data.status != "error") {
        setsearchList(data.service_provider);
        setloadingText("Search Service Provider");
        setloading(false);
      } else {
        setloadingText("No Record");
        setsearchList([]);
        setloading(false);
      }
    });
  };

  const handleSelect = (data) => {
    setservice_provider_username(data.username);

    setModalVisible(!modalVisible);
  };

  const handleProduct = async () => {
    setloading(true);
    const body = {
      name: name,
      service_provider_username: service_provider_username,
      address: address,
      projectType: projectType,
      vendor_username:user.username
    };
    if (
      projectType != "" &&
      projectType != "no" &&
      service_provider_username != "" &&
      service_provider_username != "Service Id" &&
      name != "" &&
      address != "" &&
      user.username != undefined
    ) {
    
      CreateProject(body).then((data) => {
        if (data.status != "success") {
          setloading(false);
          return Alert.alert(data.msg);
        } else {
          console.log("Data is Saved", data);
          setloading(false);
          Alert.alert(data.msg, `\n projectid :${data.projectid} `);
        }
      });
    } else {
      setloading(false);
      Alert.alert(
        "Data is Incomplete",
        `\n Please  provide the Correct :\n 1: Project Name \n 2: Address \n 3: Service Id \n 4: ProjectType`
      );
    }
  };

  const { handleSubmit, control } = useForm();
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <BlurView intensity={100} tint={"dark"} style={styles.centeredView}>
            {/* <TouchableOpacity style={styles.centeredView}> */}

            <View style={styles.modalView}>
              <View style={styles.search_box}>
                <TextInput
                  style={{ width: "80%", height: 50, paddingLeft: 25 }}
                  placeholderTextColor="black"
                  placeholder="Enter Service Id"
                  onChangeText={setsearch}
                  value={search}
                ></TextInput>
                <View
                  style={{
                    width: "20%",
                    height: 45,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="search"
                    onPress={handleSearch}
                    size={25}
                    color="black"
                  />
                </View>
              </View>

              {loading ? (
                <ActivityIndicator
                  color={"red"}
                  style={{ flex: 1 }}
                  size={40}
                />
              ) : searchList.length != 0 ? (
                <ScrollView
                  style={{
                    flex: 1,
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  {searchList &&
                    searchList.map((data, i) => {
                      return (
                        <TouchableOpacity
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => handleSelect(data)}
                          key={i}
                        >
                          <View
                            style={{
                              width: "15%",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Icon name="user" size={30} color="white" />
                          </View>
                          <View style={{ width: "85%", paddingLeft: 40 }}>
                            <Text style={{ color: "white", fontSize: 18 }}>
                              {data.name}
                            </Text>
                            <Text style={{ color: "white" }}>
                              {data.contact_no}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>{loadingText}</Text>
                </View>
              )}
            </View>
          </BlurView>
        </TouchableOpacity>
      </Modal>
      <View style={styles.Box}>
        <View style={{ flex: 1, marginLeft: 40 }}>
        <View style={{alignItems:"flex-end",position:"absolute",right:1}}>

<TouchableOpacity
        style={{
          
          width: 80,
          height:60,
         
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
      <View style={styles.middleBox}>

      <ScrollView style={{flex:1}} >
        <View style={styles.input_box}>
          <View style={{ height: "50%", flexDirection: "row" }}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.numberCircle}>
                <Text style={{ color: "white" }}>1</Text>
              </View>
            </View>
            <View style={{ width: "80%", paddingVertical: 10 }}>
              <Text style={{ flex: 1, fontSize: 20 }}>Project Name</Text>
            </View>
          </View>
          <View style={{ height: "50%" }}>
            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Enter Name"
              onChangeText={setname}
              value={name}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ height: "50%", flexDirection: "row" }}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.numberCircle}>
                <Text style={{ color: "white" }}>2</Text>
              </View>
            </View>
            <View style={{ width: "80%", paddingVertical: 10 }}>
              <Text style={{ flex: 1, fontSize: 20 }}>Address</Text>
            </View>
          </View>
          <View style={{ height: "50%" }}>
            <TextInput
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Enter Address"
              onChangeText={setaddress}
              value={address}
            ></TextInput>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ height: "50%", flexDirection: "row" }}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.numberCircle}>
                <Text style={{ color: "white" }}>3</Text>
              </View>
            </View>
            <View
              style={{
                width: "80%",
                paddingVertical: 10,
                flexDirection: "row",
              }}
            >
              <Text style={{ width: "50%", fontSize: 20 }}>
                Service Provider Id
              </Text>
              <TouchableOpacity
                style={{
                  width: 100,
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setModalVisible(true)}
              >
                <Text style={{ color: "white" }}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: "50%" }}>
            <Text
              style={styles.text_box}
              placeholderTextColor="black"
              placeholder="Enter Service Id"
            >
              {service_provider_username}
            </Text>
          </View>
        </View>
        <View style={styles.input_box}>
          <View style={{ height: "50%", flexDirection: "row" }}>
            <View
              style={{
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.numberCircle}>
                <Text style={{ color: "white" }}>4</Text>
              </View>
            </View>
            <View style={{ width: "80%", paddingVertical: 10 }}>
              <Text style={{ flex: 1, fontSize: 20 }}>Project Type</Text>
            </View>
          </View>
          <View style={{ height: "50%" }}>
            <Picker
              ref={pickerRef}
              style={{ color: "black", marginLeft: 30 }}
              itemStyle={{ paddingLeft: 10 }}
              selectedValue={projectType}
              onValueChange={(itemValue, itemIndex) =>
                setProjectType(itemValue)
              }
            >
              <Picker.Item
                style={{ paddingLeft: 10 }}
                label="---Select your Login Type---"
                value="no"
              />
              <Picker.Item
                style={{ paddingLeft: 10 }}
                label="Construction"
                value="Construction"
              />
            </Picker>
          </View>
        </View>
        {loading ? (
          <View
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
          >
            <ActivityIndicator color={"white"} style={{ flex: 1 }} size={30} />
          </View>
        ) : (
          <Button
            text="Add Project"
            action={handleProduct}
            bg_color="red"
            text_color="white"
          />
        )}
      </ScrollView>
      </View>
      <View style={styles.lastBox}></View>
      <StatusBar style={{ backgroundColor: theme.bg.wallpaper }} />
    </View>
  );
};

export default AddProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },

  Box: {
    backgroundColor: theme.bg.highlight,

    height: 60,
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
    height: 743,
    
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input_box: {
    backgroundColor: "#F5FCFF",
    height: 100,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // elevation: 8,
    marginBottom: 20,
  },
  text_box: {
    marginLeft: 25,
    color: "black",
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
    height: 30,
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
