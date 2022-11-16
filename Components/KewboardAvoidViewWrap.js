import React from 'react';
import { View,KewboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';


function KewboardAvoidViewWrap ({children}) {
    
  
    return (
        <KewboardAvoidingView   style={{flex:1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KewboardAvoidingView>
    );
}

export default KewboardAvoidViewWrap;
