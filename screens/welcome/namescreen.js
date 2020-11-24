import React, { useState, useEffect, useCallback } from "react";
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

import logo from "../../assets/logo.png"
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import preview from '../../assets/farm_profile.jpg';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { profile_update } from '../../store/actions/userAction'

import { Ionicons } from '@expo/vector-icons';
const nameScreen = (props) => {
    
    const profile = useSelector(state => state.User.profile)
    // const { username, imageURL, role } = profile
    const [ image, setImage ] = useState(profile.imageURL);
    const [ name, setName ] = useState(profile.name);
    const [ type, setType ] = useState(profile.role);
    // const image = useSelector(state => state.profile.imageURL)
    // const name = useSelector(state => state.profile.username)
    // const type = useSelector(state => state.profile.role)

    const dispatch = useDispatch()


    useEffect(()=>{
        const updateProfile = {
            ...profile,
            imageURL: image,
            firstname: name,
            role: type,
        };
        dispatch(profile_update(updateProfile))
      },[image, name, type]);

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
            console.log(result.uri);
            setImage(result.uri);
        }
    };

    const submitForm = () => {
        if (type === 'employee') {
            props.navigation.navigate("employeeScreen")
        } else if (type === 'owner') {
            props.navigation.navigate("ownerScreen")
        } else {
            console.log('select type of user');
        }

    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับครั้งเเรก</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับตัวคุณให้เราฟังหน่อย</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image style={styles.uploadImg} source={image?{uri:image}:require('../../assets/farm_profile.jpg')} />
                        </TouchableOpacity>
                        <TextInput placeholder="ชื่อผู้ใช้" style={[styles.input, theme.font]} onChangeText={setName} value={name}/>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>คุณเป็นใครในฟาร์ม</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.gridItem}
                                onPress={() => {
                                    setType('owner')
                                }}
                            >
                                <View style={{ ...styles.container, backgroundColor: (type === 'owner' ? '#FAD683' : 'white') }}>
                                    <Ionicons name="md-man" size={50} color="black" />
                                    <Text style={styles.title} numberOfLines={2} >ผู้จัดการ</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.gridItem}
                                onPress={() => {
                                    setType('employee')
                                }}
                            >
                                <View style={{ ...styles.container, backgroundColor: (type === 'employee' ? '#FAD683' : 'white') }}>
                                    <Ionicons name="ios-people" size={50} color="black" />
                                    <Text style={styles.title} numberOfLines={2}>พนักงาน</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


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

nameScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default nameScreen;
