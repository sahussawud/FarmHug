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
<<<<<<< HEAD
    Platform,
    FlatList
} from "react-native";
import { Entypo } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
=======
    Platform
} from "react-native";
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
const preview = require('../../assets/farm_profile.jpg');
<<<<<<< HEAD

import { FARMS } from '../../data/data-dummy'
const employeeScreen = (props) => {
    const [farms, setFarms] = useState([]);
=======
const cattleSetupScreen = (props) => {
    const [image, setImage] = useState(preview);

    // useEffect(() => {
    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    //             if (status !== 'granted') {
    //                 alert('Sorry, we need camera roll permissions to make this work!');
    //             }
    //         }
    //     })();
    // }, []);
    // const pickImage = async (event) => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //       quality: 1,
    //     });

    //     if (!result.cancelled) {
    //       setImage({uri:result.uri});
    //     }
    //   };

>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f

    const submitForm = () => {
        //simple validate
        //sent form
        //wait response
        props.navigation.navigate("loginScreen")
    }

<<<<<<< HEAD
    const renderFarmList = (itemData) => (
        <TouchableOpacity style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10 }}>
                <View style={styles.uploadImg}>
                    <Image style={styles.uploadImg} source={{ uri: itemData.item.imgUrl }} />
                </View>
                <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                    <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>{itemData.item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="location-pin" size={24} color="black" />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>{itemData.item.distance} km</Text>
                    </View>
                    <Text style={{ ...theme.font, fontSize: 13 }}>{itemData.item.address}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

=======
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        <Image source={logo} style={styles.logo} />
<<<<<<< HEAD
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับ</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับคุณให้เราฟังหน่อย</Text>
                    </View>
                    <View style={styles.inputArea}>
                        <TextInput placeholder="ค้นหาฟาร์ม" style={[styles.input, theme.font]} />


                    </View>

                    <View style={styles.buttonArea}>
                        <FlatList
                            data={FARMS}
                            renderItem={renderFarmList}
                            keyExtractor={item => item.id}
                        />
                        {/* <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                        </TouchableOpacity> */}
=======
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับครั้งเเรก</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับฟาร์มของคุณให้เราฟังหน่อย</Text>
                    </View>
                    <TextInput type="search" placeholder="ค้นหา
                    ฟาร์ม" style={[styles.input, theme.font]} />
                    <View style={styles.inputArea}>
                        <TouchableOpacity >
                            <Image style={styles.uploadImg} source={image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                        </TouchableOpacity>
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    uploadImg: {
<<<<<<< HEAD
        borderRadius: 200,
        height: 80,
        width: 80,
        // marginBottom: '5%'
=======
        borderRadius: 20,
        height: 80,
        width:80,
        marginBottom: '5%'
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f

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
<<<<<<< HEAD
        flexDirection: 'column',
        width: '80%',
=======
        flexDirection: 'column-reverse',
        width: '100%',
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
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
<<<<<<< HEAD
});

employeeScreen.navigationOptions = {
=======

});

cattleSetupScreen.navigationOptions = {
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

<<<<<<< HEAD
export default employeeScreen;
=======
export default cattleSetupScreen;
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
