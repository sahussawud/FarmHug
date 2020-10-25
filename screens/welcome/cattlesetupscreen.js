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
    Platform
} from "react-native";

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
const preview = require('../../assets/farm_profile.jpg');
const cattleSetupScreen = (props) => {
    const [image, setImage] = useState(preview);
    const [name, setName] = useState("");
    const [type, setType] = useState("คุณเป็นใครในฟาร์ม")

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async (event) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage({ uri: result.uri });
        }
    };

    const submitForm = () => {
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
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับครั้งเเรก</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับฟาร์มของคุณให้เราฟังหน่อย</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image style={styles.uploadImg} source={image} />
                        </TouchableOpacity>
                        <TextInput placeholder="ชื่อฟาร์ม" style={[styles.input, theme.font]} />
                        <Picker
                            selectedValue={type}
                            style={[styles.input, theme.font]}
                            onValueChange={(itemValue, itemIndex) =>
                                setType(itemValue)
                            }>
                            <Picker.Item  label="คุณเป็นใครในฟาร์ม" value="" />
                            <Picker.Item  label="เจ้าของ" value="owner" />
                            <Picker.Item  label="พนักงาน" value="employee" />
                        </Picker>
                        {/* <TextInput placeholder="ประเภทฟาร์ม" style={[styles.input, theme.font]} /> */}
                    </View>
                    <View style={styles.buttonArea}>
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

cattleSetupScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default cattleSetupScreen;
