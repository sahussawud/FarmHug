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
import farm1 from "../../assets/setting1/farm.png"
import water from "../../assets/home/water-drop.png"
import house from "../../assets/home/house.png"
import boundaries from "../../assets/setting1/boundaries.png"
import size from "../../assets/setting1/size.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// const preview = require('../../assets/farm_profile.jpg');
import TopBarProfile from '../../components/header/topBarProfile'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { FARMS } from '../../data/data-dummy'
const settingScreen = (props) => {

    const user = useSelector(state => state.User.profile)
    const _farm = useSelector(state => state.Farm.farm)
    const [profile, setProfile] = useState(user)
    const [farm, setFarm] = useState(_farm)
    const [isEditProfile, setIsEditProfile] = useState(false)
    const [isEditFarm, setIsEditFarm] = useState(false)

    const logout = () => {
        props.navigation.navigate("homeScreen")
    }

    const editProfile = () => {
        console.log('editProfile');
        setIsEditProfile(prev => !prev)
    }


    const updateProfile = (bodychange) => {
        setProfile(prev => ({ ...prev, ...bodychange }))
    }

    const renderInputDisplay = (input, keyname) => {
        if (isEditProfile) {
            return (<TextInput
                maxLength={25}
                value={input}
                onChangeText={(text) => updateProfile({ [keyname]: text })}
                style={styles.inputBox} />)
        } else {
            return (<Text style={{ ...theme.font1 }}>{input}</Text>)
        }
    }

    const editFarm = () => {
        setIsEditFarm(prev => !prev)
    }

    const updateFarm = (bodychange) => {
        setFarm(prev => ({ ...prev, ...bodychange }))
    }

    const renderInputDisplayFarm = (input, keyname) => {
        if (isEditFarm) {
            return (<TextInput
                maxLength={25}
                value={input}
                onChangeText={(text) => updateFarm({ [keyname]: text })}
                style={styles.inputBox} />)
        } else {
            return (<Text style={{ ...theme.font1 }}>{input}</Text>)
        }
    }



    return (
        <SafeAreaView>
            <TopBarProfile navigation={props.navigation} />

            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    {/* 
                    <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', color: '#708090', marginLeft: '10%' }}>รายละเอียดบัญชี</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback1}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={farmer1} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ชื่อ</Text>

                                </View>
                                <View style={styles.backrow}>
                                        {renderInputDisplay(profile.firstname, 'firstname')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={farmer2} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>นามสกุล</Text>
                                </View>
                                <View style={styles.backrow}>
                                {renderInputDisplay(profile.lastname, 'lastname')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={line} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>Line</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplay(profile.line_account, 'line_account')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={house} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ที่อยู่</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplay(profile.address, 'address')}
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={{ flex: 1 }}>
                        {!isEditProfile ? (<TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={editProfile}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เเก้ไขบัญชี</Text>
                        </TouchableOpacity>) : (
                                <TouchableOpacity style={[styles.button, theme.successButton]} onPress={editProfile}>
                                    <Text style={{ ...theme.font, textAlign: 'center' }}>บันทึกเเก้ไข</Text>
                                </TouchableOpacity>
                            )}
                    </View> */}

                    <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', color: '#708090', marginLeft: '10%' }}>ข้อมูลฟาร์ม</Text>

                    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center' }}>
                        <View style={styles.layback1}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={farm1} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ชื่อฟาร์ม</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.name, 'name')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={home} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ที่อยู่</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.address, 'address')}

                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={boundaries} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>คำอธิบาย</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.description, 'description')}

                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={size} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ขนาดพื้นที่</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.area, 'area')}

                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={water} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ความถี่ในการเช็ครางน้ำ(วัน)</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.watercheck, 'water')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={water} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>ความเร็วการลดอาหาร(%/วัน)</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.foodConsume, 'foodConsume')}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.frontrow}>
                                    <Image source={water} style={{ width: 35, height: 35, marginHorizontal: 20 }} />
                                    <Text style={{ ...theme.font1, }}>จำนวนพนักงาน</Text>
                                </View>
                                <View style={styles.backrow}>
                                    {renderInputDisplayFarm(farm.employee, 'employee')}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View >
                        {/* <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={editFarm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เเก้ไขข้อมูลฟาร์ม</Text>
                        </TouchableOpacity> */}

                        {!isEditFarm ? (<TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={editFarm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เเก้ไขฟาร์ม</Text>
                        </TouchableOpacity>) : (
                                <TouchableOpacity style={[styles.button, theme.successButton]} onPress={editFarm}>
                                    <Text style={{ ...theme.font, textAlign: 'center' }}>บันทึกเเก้ไข</Text>
                                </TouchableOpacity>
                            )}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    inputBox: { ...theme.font1, fontWeight: 'bold', borderColor: 'black', borderBottomWidth: 1, textAlign: 'center', alignItems: 'flex-start', width: '100%' },
    frontrow: { flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    backrow: { flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 20 },
    backbutton: {
        marginRight: 15
    },
    profile: {
        flexDirection: 'row'
    },
    screen: {
        flex: 1,
        paddingBottom: '30%',
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
    layback1: {
        flex: 1,
        width: 300,
        height: 190,
        backgroundColor: '#F5F5F5',
        marginBottom: '5%',
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2: {
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
