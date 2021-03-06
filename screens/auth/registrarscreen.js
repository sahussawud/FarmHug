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
    StatusBar,
    Alert
} from "react-native";
import logo from "../../assets/logo.png"
import theme from "../../themes/default"

import axios from 'axios'
import { registerPath,createAlert } from '../../data/fetching'


const RegistarScreen = (props) => {


    const [payload, setPayload] = useState({
        username: undefined,
        password: undefined,
        repassword: undefined
    })
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    

    const submitForm = async () => {
        //simple validate
        if (!isEnabled) {
            createAlert('ลงทะเบียนไม่สำเร็จ', 'กรุณายอมรับข้อตกลงการใช้')
        } else if (payload.password !== payload.repassword) {
            createAlert('ลงทะเบียนไม่สำเร็จ', 'ยืนยันรหัสผ่านไม่ถูกต้อง')
        }
        if (isEnabled && (payload.password === payload.repassword)) {

            axios.post(registerPath, { username: payload.username, password:payload.repassword }).then(response => {
              if (response.status === 200) {
                    createAlert('สร้างผู้ใช้สำเร็จ', 'กรุณาเข้าสู่ระบบใหม่อีกครั้ง')
                    props.navigation.goBack()
                }
            }).catch(error => {
                console.log(error.request.status);
                if(error.request.status === 400){
                    createAlert('มีปัญหาบางอย่างเกิดขึ้น', 'มีชื่อผู้ใช้นี้อยู่เเล้ว')
                }
                
            })


        }
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>สมัครสมาชิก</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TextInput placeholder="ชื่อผู้ใช้" style={[styles.input, theme.font]} value={payload.username} onChangeText={t => setPayload(prev => ({ ...prev, username: t }))} />
                        {/* <TextInput placeholder="อีเมล" style={[styles.input, theme.font]}  value={payload.email}/> */}
                        <TextInput placeholder="รหัสผ่าน" style={[styles.input, theme.font]} secureTextEntry value={payload.password} onChangeText={t => setPayload(prev => ({ ...prev, password: t }))} />
                        <TextInput placeholder="ยืนยันรหัสผ่าน" style={[styles.input, theme.font]} secureTextEntry value={payload.repassword} onChangeText={t => setPayload(prev => ({ ...prev, repassword: t }))} />
                        <View style={styles.privacyaccept}>
                            <Switch
                                style={{ marginRight: '5%' }}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={{ ...theme.font, textDecorationLine: 'underline', fontSize: 14 }}
                                onPress={() => Linking.openURL('http://google.com')}>
                                ยอมรับข้อตกลงในความเป็นส่วนตัว</Text>
                        </View>

                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>สมัครสมาชิก</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
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
        width: 100,
        height: 100,
        marginBottom: 20
    },
    topArea: {
        flex: 3,
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 3,
        flexDirection: 'column-reverse',
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

RegistarScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default RegistarScreen;
