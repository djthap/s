import React from 'react';
import { Pressable ,Text,TouchableOpacity } from 'react-native';
import theme from "../Config/theme.js";

function Button (props) {
    return (
        <TouchableOpacity
            style={{
              marginHorizontal: 50,
              marginTop: 30,
              color: props.text_color?props.text_color:"white",
              backgroundColor: props.bg_color?props.bg_color:"black",
              borderRadius: 25,
              height: 45,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={props.action}
          >
            
            <Text style={{ color:  props.text_color?props.text_color:"white" }}>{props.text}</Text>
          </TouchableOpacity>
    );
}

export default Button;
