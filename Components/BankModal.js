import React, { useRef, useState } from "react";
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
import Icon from "react-native-vector-icons/FontAwesome";

import { BlurView } from "expo-blur";

export default function BankModal({modalVisible,setModalVisible ,styles}) {
  return (
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

        <View style={styles.modalView}>
          <ScrollView
            style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 10 }}
          >
             <Text style={styles.headingDesign}>Bank :</Text>
                <View style={styles.user_box2}>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>ACCOUNT NO.</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>IFSC Code:</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>Bank Name:</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>Name of account holder</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
          </View>
            <Text style={styles.headingDesign}>Payment :</Text>
          <View style={styles.user_box2}>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>Google pay No.:</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>Phonepay No.</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
            <View style={styles.user_box3}>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >

                <Icon name="bank" size={20} color="black" />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 15 }}>UPI:</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  placeholder="******"
                ></TextInput>
              </View>
            </View>
          </View>
          </ScrollView>
        </View>
        {/* </TouchableOpacity> */}
      </BlurView>
    </TouchableOpacity>
  </Modal>
  )
}
