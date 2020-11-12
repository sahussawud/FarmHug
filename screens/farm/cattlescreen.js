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
    FlatList,
} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { ButtonGroup } from 'react-native-elements';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/home/farmer.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import cow3 from "../../assets/Farm/cow3.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// const preview = require('../../assets/farm_profile.jpg');

import { FARMS } from '../../data/data-dummy'
const cattleScreen = (props) => {
    const [farms, setFarms] = useState([]);
    const component1 = () => <Text>ปศุสัตว์</Text>
    const component2 = () => <Text>สถานะ</Text>
    const component3 = () => <Text>กิจกรรม</Text>
    const buttons = [{ element: component1}, { element: component2 }, { element: component3 }]


    const submitForm1 = () => {
        props.navigation.navigate("statuScreen")
    }
    const submitForm2 = () => {
        props.navigation.navigate("activityScreen")
        }

    const renderFarmList = (itemData) => {}

    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                <View style={styles.profile}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', marginLeft: '2%'}}>ชื่อ: -</Text>

                </View>
                </View>
                <View style={styles.button2}>
                <ButtonGroup
                    buttons={buttons}
                    containerStyle={{height: 50, weight:50}}
                />
                </View>
                <View style={styles.inputArea}>
                    <TextInput placeholder="ค้นหาฟาร์ม" style={[styles.input, theme.font]} />
                </View>

                
                <View style={styles.layback1}> 
                <View style={{flex: 1, flexDirection: 'row'}}>
                <Image source={cow3} style={{width: 65, height: 65,marginBottom: '5%', marginLeft: '5%', marginTop: '5%'}}/>
                <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%'}}>โคเนื้อ</Text>
                </View>

                <View style={styles.button1}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm1}>
                                <Text style={{ ...theme.font1, textAlign: 'center' }}>ชั่งน้ำหนัก  </Text>
                            </TouchableOpacity>
                    
                            <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={"submitForm"}>
                                <Text style={{ ...theme.font1, textAlign: 'center' }}>รักษา/วัคซีน </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm2}>
                                <Text style={{ ...theme.font1, textAlign: 'center' }}>เพิ่มกิจกรรม </Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    

    );
};


const styles = StyleSheet.create({
    profile:{
        flexDirection: 'row'
    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10
    },
    fonts:{
        color: 'black',
        fontSize: 20, 
        fontWeight: 'bold', 
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    topArea: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 3,
        flexDirection: 'column',
        width: '100%',
        marginBottom: '25%',
    },
    inputArea: {
        flex: 3,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2%',
        borderColor: 'black',
    },
    button1: {
        borderRadius: 5,
        width: '50%',
        height: '30%',
        marginBottom: '5%',
    },
    button2: {
        borderRadius: 10,
        marginBottom: '5%',
    },
    button: {
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '16%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color,
        justifyContent: "center",
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1:{
        flex: 1,
        width: 340,
        height: 200,
        backgroundColor: '#F5F5F5',
        marginTop: '2%',  
        marginBottom: '5%', 
        borderRadius: 15,
        marginLeft:'2%'
        // alignItems: "center",
    },
    layback2:{
        flex: 1,
        width: 300,
        height: 200,
        backgroundColor: '#F5F5F5',  
        marginBottom: '10%', 
        borderRadius: 15,
        alignItems: "center",
    }
});

cattleScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default cattleScreen;
