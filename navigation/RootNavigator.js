import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Screen imports
import Login from "../Screen/Login";
import Dashboard from "../Screen/Dashboard";
import AddProject from "../Screen/AddProject";
import Profile from "../Screen/Profile";
import Icon from "react-native-vector-icons/AntDesign";
import AddMaterial from "../Screen/AddMaterial";
import SignUpScreen from "../Screen/SignUpScreen";
import ProjectList from "../Screen/ProjectList";
import ProjectDescription from "../Screen/ProjectDescription";
import ViewSubprojects from "../Screen/ViewSubprojects";
import AddSubProject from "../Screen/AddSubProject";
import theme from "../Config/theme";
import CustomDrawer from "../Components/CustomDrawer";

//Navigation imports
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SignUp } from "../actions/login";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="ProjectDescription" component={ProjectDescription} />
      <Stack.Screen name="AddProject" component={AddProject} />
      <Stack.Screen name="AddMaterial" component={AddMaterial} />
      <Stack.Screen name="AddSubProject" component={AddSubProject} />
      <Stack.Screen name="ProjectList" component={ProjectList} />
      <Stack.Screen name="ViewSubprojects" component={ViewSubprojects} />
    </Stack.Navigator>
  );
};
const MyDashboard = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Header" component={Header} /> */}
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

// Draw Comps
const Drawer = createDrawerNavigator();

const Mydrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -10 },
        drawerActiveBackgroundColor: theme.bg.wallpaper,
        drawerActiveTintColor: "black",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        component={MyDashboard}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Project"
        component={MyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Report"
        component={MyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Service provider"
        component={MyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment Request"
        component={MyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Packages"
        component={MyStack}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="User Management"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="delete" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Mydrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
