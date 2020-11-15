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
import logo from "../../assets/home/farmer.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import farmer1 from "../../assets/setting1/farmer1.png"
import farmer2 from "../../assets/setting1/farmer2.png"
import home from "../../assets/setting1/home.png"
import line from "../../assets/setting1/line.png"
import farm from "../../assets/setting1/farm.png"
import water from "../../assets/home/water-drop.png"
import house from "../../assets/home/house.png"
import boundaries from "../../assets/setting1/boundaries.png"
import size from "../../assets/setting1/size.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// const preview = require('../../assets/farm_profile.jpg');

import { FARMS } from '../../data/data-dummy'
const settingScreen = (props) => {
    const [farms, setFarms] = useState([]);

    const submitForm = () => {
        //simple validate
        //sent form
        //wait response
        props.navigation.navigate("homeScreen")
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

                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold',color:'#708090', marginLeft: '10%'}}>รายละเอียดบัญชี</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.layback1}> 
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={farmer1} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '2%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '5%', marginLeft: '2%', marginTop: '4%'}}>ชื่อ</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '84%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={farmer2} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '1%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>นามสกุล</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '79.4%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}> 
                            <Image source={line} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '1%'}}/>
                            <Text style={{...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>Line</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '82.5%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={house} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>ที่อยู่</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '82.7%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold',color:'#708090', marginLeft: '10%'}}>ข้อมูลฟาร์ม</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.layback2}> 
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={farm} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '2%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '5%', marginLeft: '2%', marginTop: '4%'}}>ชื่อฟาร์ม</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '79.5%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={home} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '1%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>ที่อยู่</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '82.7%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}> 
                            <Image source={boundaries} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%', marginTop: '1%'}}/>
                            <Text style={{...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>พื้นที่</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '82.5%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={size} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>ความจุ</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '80.7%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image source={water} style={{width: 35, height: 35,marginBottom: '5%', marginLeft: '3%'}}/>
                            <Text style={{ ...theme.font1, marginBottom: '3%', marginLeft: '2%', marginTop: '2%'}}>รางน้ำดื่ม</Text>
                            <TouchableOpacity onPress={submitForm}>
                                <View style={{  marginBottom: '5%', marginLeft: '78.5%', marginTop: '4%'}}>
                                 <Ionicons name="ios-arrow-dropright" size={21} color='black'/>
                                </View>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                <View style={styles.buttonArea}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ออกจากระบบ</Text>
                        </TouchableOpacity>
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
        marginBottom: '5%'
    },
    button: {
        flex: 1,
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color,
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1:{
        flex: 1,
        width: 300,
        height: 190,
        backgroundColor: '#F5F5F5',  
        marginBottom: '5%', 
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2:{
        flex: 1,
        width: 300,
        height: 230,
        backgroundColor: '#F5F5F5',  
        marginBottom: '3%', 
        borderRadius: 15,
    }
});

settingScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default settingScreen;
