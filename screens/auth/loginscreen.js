import React, { useState } from "react";
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
import { useDispatch } from 'react-redux';
import {sign_in} from '../../store/actions/userAction'


const LoginScreen = (props) => {
    const dispatch = useDispatch()
    const [payload, setPayload] = useState({ username: null, password: null })

    const LoginSubmit = () => {
        const status = 200
        const mocktoken = 'iloveyou'
        if(status == 200){
            dispatch(sign_in(mocktoken))
        }
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
                <TextInput placeholder="อีเมล" style={[styles.input, theme.font]} value={payload.username} onChangeText={t=> setPayload(prev=> ({...prev, username: t}))}/>
                <TextInput placeholder="รหัสผ่าน" style={[styles.input, theme.font]} value={payload.password} onChangeText={t=> setPayload(prev=> ({...prev, password: t}))} secureTextEntry/>
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
