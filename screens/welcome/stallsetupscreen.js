import React, { useState, useEffect } from "react";
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
    FlatList
} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
const preview = require('../../assets/farm_profile.jpg');

import { FARMS } from '../../data/data-dummy'
const stallSetupScreen = (props) => {
    const [farms, setFarms] = useState([]);

    const submitForm = () => {
        //simple validate
        //sent form
        //wait response
        props.navigation.navigate("homeScreen")
    }

    const renderFarmList = (itemData) => (
        <View style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10 }}>
                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', position: "absolute", top: 0, left: 0 }}>#1</Text>
                <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ความจุ</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>0</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ตัว</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>พื้นที่</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>0</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ตร.ม</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        {/* <TouchableOpacity style={[styles.button, theme.successButton, {  marginBottom: 20 }]}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}><Ionicons name="ios-add-circle-outline" size={24} color="black" /> เพิ่ม</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={[styles.button, theme.dangerButton, {  marginBottom: 20 , alignContent: 'center', width:'40%'}]}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}> ยกเลิก</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับ</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับคุณให้เราฟังหน่อย</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <Text style={{ ...theme.font, fontSize: 16, fontWeight: 'bold' }}>เพิ่มคอก</Text>
                    </View>

                    <View style={styles.buttonArea}>
                        <FlatList
                            data={FARMS}
                            renderItem={renderFarmList}
                            keyExtractor={item => item.id}
                        />
                        <TouchableOpacity style={[styles.button, theme.successButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เพิ่มคอก</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


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
        flex: 3,
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 3,
        flexDirection: 'column',
        width: '80%',
        marginBottom: '25%',
    },
    inputArea: {
        flex: 3,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
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
