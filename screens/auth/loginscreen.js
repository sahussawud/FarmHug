import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
    Linking,
    KeyboardAvoidingView,
    StatusBar

} from "react-native";
import logo from "../../assets/logo.png"
import theme from "../../themes/default"
import { useDispatch, useSelector } from 'react-redux';
import { sign_in, profile_update } from '../../store/actions/userAction'
import { farmdata, getUserData } from '../../data/graphl_query'

import { signinPath, createAlert } from '../../data/fetching'
import axios from 'axios'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create_farm } from "../../store/actions/farmAction";


const LoginScreen = (props) => {
    const profile = useSelector(state => state.User.profile)
    const dispatch = useDispatch()
    const { data, loading, refetch } = useQuery(farmdata, { variables: { id: profile.farm_id } })

    const [payload, setPayload] = useState({ username: null, password: null })
    useEffect(() => {
        if (data) {
            dispatch(create_farm(data.farm))
        }
    }, [data])

    const LoginSubmit = () => {

        axios.post(signinPath, { username: payload.username, password: payload.password }).then(async response => {
            if (response.status === 200) {
                console.log(response.data.profile);
                dispatch(profile_update(response.data.profile))
                refetch()
                dispatch(sign_in(response.data.token))
                console.log('farmData', response.data.profile.farm_id);
                await AsyncStorage.setItem('_id', response.data.profile._id)
            }
        }).catch(error => {
            console.log(JSON.stringify(error, null, 2))
            createAlert('เข้าสู่ระบบไม่สำเร็จ', 'กรุณาลองใหม่อีกครั้ง')
        })
        // if(status == 200){
        //     dispatch(sign_in(mocktoken))
        // }
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.screen}>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <View style={styles.topArea}>
                <Image source={logo} style={styles.logo} />
                {/* <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>เข้าสู่ระบบ</Text> */}
            </View>
            <View style={styles.inputArea}>
                <TextInput placeholder="ชื่อผู้ใช้" style={[styles.input, theme.font]} value={payload.username} onChangeText={t => setPayload(prev => ({ ...prev, username: t }))} />
                <TextInput placeholder="รหัสผ่าน" style={[styles.input, theme.font]} value={payload.password} onChangeText={t => setPayload(prev => ({ ...prev, password: t }))} secureTextEntry />
                {/* <Text style={{ textDecorationLine: 'underline', ...theme.font }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    ลืมรหัสผ่าน?
                </Text> */}
            </View>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={LoginSubmit}>
                    <Text style={{ ...theme.font, textAlign: 'center' }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
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
        marginBottom: '5%',
        textAlign: 'center',
        // paddingHorizontal: 40,
        paddingVertical: 10,

    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,

    },
    topArea: {
        flex: 3,
        // marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
        // width: 100%
    },
    button: {
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
    }
});

LoginScreen.navigationOptions = {
    title: "เข้าสู่ระบบ",
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default LoginScreen;
