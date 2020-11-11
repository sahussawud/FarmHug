import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    Platform
} from "react-native";

import DropDownPicker from 'react-native-dropdown-picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
const preview = require('../../assets/farm_profile.jpg');
import { useSelector } from 'react-redux';

const finishscreen = (props) => {

    const profile = useSelector(state=> state.User.profile)
    const farm = useSelector(state=> state.Farm.farm)
    // const [image, setImage] = useState(preview);
    // const [name, setName] = useState("สงบ สุขสบาย");
    // const [farm, setFarm] = useState("สุขสงบฟาร์ม");
    // const [role, setType] = useState("เจ้าของฟาร์ม");

    const submitForm = () => {   
    }
    const isImageProfile = profile.imageURL

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>สำเร็จเเล้ว</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>พร้อมสำหรับใช้งานฟาร์มฮักเเล้วครับ</Text>
                    </View>
                    <View style={styles.inputArea}>
                            <Image style={styles.uploadImg} source={ isImageProfile ? {uri :profile.imageURL}  : require('../../assets/farm_profile.jpg')} />
                            <Text style={[theme.font]}>
                                ชื่อ: {profile.username}
                            </Text>
                            <Text style={[theme.font]}>
                                ฟาร์ม: {farm.name}
                            </Text>
                            <Text style={[theme.font]}>
                                บทบาท: {profile.role == 'owner' ? 'เจ้าของฟาร์ม' : profile.role == 'employee' ? 'พนักงานในฟาร์ม' : 'ไม่ระบุ'}
                            </Text>
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เริ่มต้นใช้งาน</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "right",
    },
    gridItem: {
        flex: 2,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    uploadImg: {
        borderRadius: 200,
        height: 150,
        width: 150,
        marginBottom: '5%'

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
        justifyContent: 'center',
        width: '100%',
        marginBottom: '10%',
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
        width: '100%',
        borderRadius: 5,
        textAlign: 'center',
        // marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

finishscreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default finishscreen;
