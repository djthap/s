import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screen/Login";
import Dashboard from "./Screen/Dashboard";
import AddProject from "./Screen/AddProject";
import Profile from "./Screen/Profile";
import KewboardAvoidViewWrap from "./Components/KewboardAvoidViewWrap";
import AddMaterial from "./Screen/AddMaterial";
import SignUpScreen from "./Screen/SignUpScreen";
import ProjectList from "./Screen/ProjectList";
import ProjectDescription from "./Screen/ProjectDescription";
import ViewSubprojects from "./Screen/ViewSubprojects";
import AddSubProject from "./Screen/AddSubProject";

import { Button } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import CustomDrawer from "./Components/CustomDrawer";
import { color } from "react-native-reanimated";
import theme from "./Config/theme";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  const slack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    
      <RootNavigator/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
