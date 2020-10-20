import React, { useState } from "react";
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
    ScrollView
} from "react-native";
import logo from "../../assets/logo.png"
import theme from "../../themes/default"

const RegistarScreen = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const submitForm = () =>{
        //simple validate
        //sent form
        //wait response
        props.navigation.navigate("loginScreen")
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>สมัครสมาชิก</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TextInput placeholder="ชื่อผู้ใช้" style={[styles.input, theme.font]} />
                        <TextInput placeholder="อีเมล" style={[styles.input, theme.font]} />
                        <TextInput placeholder="รหัสผ่าน" style={[styles.input, theme.font]} />
                        <TextInput placeholder="ยืนยันรหัสผ่าน" style={[styles.input, theme.font]} />
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
