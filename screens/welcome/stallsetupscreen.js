import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Image,
    Linking,
    SafeAreaView,
    ScrollView,
    Platform,
    FlatList,KeyboardAvoidingView
} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import farm from "../../models/farms";
const preview = require('../../assets/farm_profile.jpg');

// import StallList from '../../components/stallList'
const stallSetupScreen = (props) => {
    const [stall, setstall] = useState({});

    const submitForm = () => {
        //simple validate
        //sent form
        //wait response
        props.navigation.navigate("animaladdscreen")
    }

    return (
        // <SafeAreaView style={[styles.screen, { backgroundColor: 'white' }]}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.screen}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.topArea}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับ</Text>
                    <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับคุณให้เราฟังหน่อย</Text>
                </View>
                <View style={styles.inputArea}>
                    <Text style={{ ...theme.font, fontSize: 16, fontWeight: 'bold' }}>คอกเลี้ยง</Text>
                    <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical:'6%' }}>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>จำนวนคอก</Text></View>
                            <View style={{width:'33%'}}><TextInput  keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold',borderWidth:1, borderColor:'black', textAlign:'center'}} /></View>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>คอกเลี้ยง</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical:'6%' }}>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>พื้นที่</Text></View>
                            <View style={{width:'33%'}}><TextInput  keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth:1, borderColor:'black', textAlign:'center' }} /></View>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>ตร.เมตร</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical:'6%' }}>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>ความจุ</Text></View>
                            <View style={{width:'33%'}}><TextInput  keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold',borderWidth:1, borderColor:'black', textAlign:'center' }} /></View>
                            <View style={{width:'33%', alignItems: 'center'}}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>ตัว/คอก</Text></View>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={[styles.button, theme.defaultButton, { width: '100%' }]} onPress={submitForm}>
                        <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        // </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    uploadImg: {
        borderRadius: 200,
        height: 80,
        width: 80,
        // marginBottom: '5%'

    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        textAlign: 'center',
        marginBottom: '5%',
        // paddingHorizontal: 40,
        paddingVertical: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },
    topArea: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: '5%',
        // width: '80%',
        alignItems: 'center',
        marginTop: '10%'
    },
    inputArea: {
        flex: 1,
        // width: '80%',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginBottom: '5%'
    },
    button: {
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

stallSetupScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default stallSetupScreen;
