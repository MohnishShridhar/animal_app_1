import React from 'react';
import {Text, View, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default class MissingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            buttonState:'normal',
            breed:'',
        }
    }

    render(){
        return(
            <View></View>
        )
    }
}