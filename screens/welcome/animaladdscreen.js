import React, { useState, useEffect, useCallback } from "react";
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
    FlatList,
    KeyboardAvoidingView,
    Button
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import ANIMAL from '../../models/animal'

const preview = require('../../assets/farm_profile.jpg');
import moment from 'moment';
import 'moment/locale/th'  // without this line it didn't work
moment.locale('th')

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create_animal, update_animal } from '../../store/actions/farmAction'
const animaladdscreen = (props) => {
    const dispatch = useDispatch()
    const stall_id = props.navigation.getParam("stall_id")
    const SelectedStall = useSelector(state => state.Farm.stall.find(stall => stall.id === stall_id))
    const [animal, setAnimal] = useState(new ANIMAL('', '', 'โคเนื้อ', stall_id, '', '', 0, 0, '', 'M', moment().format('DD MMMM YYYY'), undefined))

    const isUpdateTask = props.navigation.getParam("type") === 'edit' ? true : false;
    useEffect(() => {
        // console.log(props.navigation.getParam("animal"), );
        if (props.navigation.getParam("type") === 'edit') {
            console.log('useEffect animalAddscreen');
            const updateAnimal = props.navigation.getParam("animal")
            setAnimal(updateAnimal)
        } 

    }, [props.navigation.getParam("type")])

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        const selectDate = moment(date).format('DD MMMM YYYY')
        setAnimal(prev => ({ ...prev, dob: selectDate }))
        hideDatePicker();
    };

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
            setAnimal(prev => ({ ...prev, imageUrl: result.uri }));
        }
    };

    const submitForm = () => {
        dispatch(create_animal(SelectedStall, animal));
        props.navigation.navigate("selectstallscreen")
    }

    const updatesubmit = useCallback(() =>{
        // console.log('updatesubmit', animal);
        dispatch(update_animal(animal));
        props.navigation.navigate("animallistscreen")
    })

    const changeSexhandle = () => setAnimal(prev => ({ ...prev, sex: animal.sex === 'M' ? 'F' : 'M' }))



    return (
        // <SafeAreaView style={[styles.screen, { backgroundColor: 'white' }]}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.screen}>
            <ScrollView style={{ width: '100%' }} >

                <View style={styles.inputArea}>
                    {/* <Text style={{ ...theme.font, fontSize: 16, fontWeight: 'bold' }}>เพิ่มสัตว์</Text> */}
                    <View style={{ flex: 1, flexDirection: 'column', width: '100%', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10 }}>
                        <View style={{ flexDirection: 'row', paddingVertical: '6%' }}>
                            <TouchableOpacity onPress={pickImage} style={{ flex: 0.7, alignItems: 'center' }}>
                                <Image style={styles.uploadImg} source={animal.imageUrl ? { uri: animal.imageUrl } : require('../../assets/farm_profile.jpg')} />
                            </TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <View style={{ width: '50%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>รหัสคอก</Text></View>
                                    <View style={{ width: '50%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>{animal.stall_id}</Text></View>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 8 }}>
                                    <View style={{ width: '50%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>สัตว์</Text></View>
                                    <View style={{ width: '50%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>{animal.type}</Text></View>
                                </View>

                            </View>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '6%' }}>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>สายพันธ์ุ</Text></View>
                            <View style={{ width: '66%' }}><TextInput value={animal.gene}
                                onChangeText={text =>
                                    setAnimal(prev => ({ ...prev, gene: text }))}
                                style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderColor: 'black', textAlign: 'center' }} /></View>
                            {/* <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>คอกเลี้ยง</Text></View> */}
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '6%' }}>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>วันเกิด</Text></View>
                            {/* <View style={{ width: '66%' }}></View> */}
                            <View style={{ width: '66%' }}>

                                {/* <TextInput  style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderColor: 'black', textAlign: 'center' }} onPress={showDatepicker}/> */}
                                {/* <Button title={'selecDate'} onPress={showTimepicker} /> */}

                                <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>{animal.dob}</Text>
                                    <AntDesign name="calendar" size={24} color="black" style={{ marginLeft: 10 }} />
                                </TouchableOpacity>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    isDarkModeEnabled={false}
                                />
                            </View>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '6%' }}>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>เพศเมีย</Text></View>
                            <View style={{ width: '33%', alignItems: 'center' }}>
                                {/* <TextInput  value={animal.height} onChangeText={text=>{setAnimal(prev=> ({...prev, sex: text}))}} keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderColor: 'black', textAlign: 'center' }} /> */}

                                <Switch
                                    trackColor={{ false: "#ffc0cb", true: "#9ac59a" }}
                                    thumbColor={animal.sex === 'M' ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#ffc0cb"
                                    onValueChange={changeSexhandle}
                                    value={animal.sex === 'M'}
                                    style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                                />

                            </View>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>เพศผู้</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '6%' }}>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>น้ำหนัก</Text></View>
                            <View style={{ width: '33%' }}><TextInput value={animal.weight} onChangeText={text => { setAnimal(prev => ({ ...prev, weight: text })) }} keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderColor: 'black', textAlign: 'center' }} /></View>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>กก.</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: '6%' }}>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>สูง</Text></View>
                            <View style={{ width: '33%' }}><TextInput value={animal.height} onChangeText={text => { setAnimal(prev => ({ ...prev, height: text })) }} keyboardType='number-pad' style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderColor: 'black', textAlign: 'center' }} /></View>
                            <View style={{ width: '33%', alignItems: 'center' }}><Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}>ซม.</Text></View>
                        </View>

                    </View>
                </View>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={[styles.button, theme.successButton, { width: '100%' }]} onPress={isUpdateTask ? updatesubmit : submitForm}>
                        <Text style={{ ...theme.font, textAlign: 'center' }}>{ isUpdateTask ? 'อัพเดต' : 'เพิ่ม' }</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        // </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    uploadImg: {
        borderRadius: 5,
        height: 100,
        width: 100,
        // marginBottom: '5%'

    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
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
        flex: 1,
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: '5%',
        // width: '80%',
        alignItems: 'center',
        marginTop: '2%',
    },
    inputArea: {
        flex: 1,
        // width: '80%',
        alignItems: 'center',
        marginHorizontal: '5%',
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

animaladdscreen.navigationOptions = {
    headerTitle: 'เพิ่มสัตว์',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default animaladdscreen;
