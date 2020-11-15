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
    StatusBar
} from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/home/farmer.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import cow from "../../assets/home/cow.png"
import check from "../../assets/home/check.png"
import grass from "../../assets/home/grass.png"
import group from "../../assets/home/group.png"
import house from "../../assets/home/house.png"
import plant from "../../assets/home/plant.png"
import water from "../../assets/home/water-drop.png"
import wait from "../../assets/home/wait.png"
import cow2 from "../../assets/home/cow2.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// const preview = require('../../assets/farm_profile.jpg');
import { Fontisto } from '@expo/vector-icons';
import { FARMS } from '../../data/data-dummy'

import TopBarProfile from  '../../components/topBarProfile';
const homeScreen = (props) => {
    const [farms, setFarms] = useState([]);

    const addFarmActivity = () => {
        
    }

    const renderFarmList = (itemData) => { }

    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <TopBarProfile/>
            <View style={{ flex: 0.8, paddingHorizontal: 10 }}>
                <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>สถานะฟาร์มวันนี้</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.layback1}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={cow} style={{ width: 35, height: 35, marginBottom: '5%', marginLeft: '2%', marginTop: '2%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                            <Image source={house} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                            <Image source={grass} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                            <Image source={water} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={check} style={{ width: 35, height: 35, marginBottom: '5%', marginLeft: '2%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                            <Image source={wait} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                            <Image source={group} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                            <Image source={plant} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1.4 }}>
                <View style={styles.screen}>

                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>กิจกรรมภายในฟาร์ม</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback2} >
                            <ScrollView style={{width:'100%'}}>
                                <View style={{flex:1, justifyContent:'center', padding:'20%', width:'100%'}}>
                                    <Image source={cow2} style={{ width: 50, height: 50, marginTop: '10%', alignSelf:'center'}} />
                                    <Text style={{ ...theme.font, textAlign: 'center', marginTop: '11%', fontSize:13 }}>ไม่มีกิจกรรมใดๆภายในฟาร์ม</Text>
                                </View>
                                <View style={{flex:1, justifyContent:'center', padding:'20%', width:'100%'}}>
                                    <Image source={cow2} style={{ width: 50, height: 50, marginTop: '10%', alignSelf:'center'}} />
                                    <Text style={{ ...theme.font, textAlign: 'center', marginTop: '11%', fontSize:13 }}>ไม่มีกิจกรรมใดๆภายในฟาร์ม</Text>
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.4, }}>
                <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={addFarmActivity}>
                    <Text style={{ ...theme.font, textAlign: 'center' }}>เพิ่มกิจกรรมในฟาร์ม</Text>
                </TouchableOpacity>

            </View>
           
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    profile: {
        flex: 1,
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
    fonts: {
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
        marginBottom: '5%'
    },
    button: {
        flex: 0.6,
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '3%',
        marginTop: '4%',
        // paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color,
        justifyContent: "center",
        alignItems: "center",
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1: {
        flex: 1,
        width: 300,
        height: 120,
        backgroundColor: '#F5F5F5',
        marginBottom: '10%',
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2: {
        flex: 1,
        width: '60%',
        backgroundColor: '#F5F5F5',
        marginBottom: 0,
        borderRadius: 15,
        alignItems: "center",
    }
});

homeScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default homeScreen;
