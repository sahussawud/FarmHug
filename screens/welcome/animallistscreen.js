import React, { useState } from "react";
import {
    View,
    Text,

    StyleSheet,
    TouchableOpacity,

    SafeAreaView,
    ScrollView,

    FlatList
} from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delete_animal } from '../../store/actions/farmAction'


const AnimalListScreen = (props) => {
    const dispatch = useDispatch()
    const SelectStallId = props.navigation.getParam("stall_id")
    const animals = useSelector(state => state.Farm.animal).filter(animal=> animal.stall_id === SelectStallId)

    const editAnimal = (animal) => {
        props.navigation.navigate("animaladdscreen", { type: 'edit', animal: animal, stall_id: SelectStallId})
    }

    const deleteAnimal = (animal) => {
        dispatch(delete_animal(animal))
    }

    const colorStatus = (current, max) => current>=max ? 'red' : current/max > 0.5  ? 'orange'  : 'green';

    const submitForm=()=>{
        props.navigation.goBack()
    }

    const renderAnimalList = (itemData) => {
        console.log(itemData.item);
        const colorstatus = colorStatus(itemData.item.currentAnimal, itemData.item.maximumAnimal);
        return (
        <View style={{ marginBottom: 10 }} >
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10 }}>
                {/* <View style={styles.uploadImg}>
                    <Image style={styles.uploadImg} source={{ uri: itemData.item.imgUrl }} />
                </View> */}
                <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> ชื่อ : {itemData.item.type} </Text>
                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {itemData.item.gene} {itemData.item.sex =='M'? 'ตัวผู้' : 'ตัวเมีย' }</Text>
                </View>
                <View style={{ width: '40%', justifyContent:'center', flexDirection: 'row', alignContent: 'center', marginLeft:10}}>
                    <TouchableOpacity onPress={()=> editAnimal(itemData.item)}>
                    <FontAwesome5 name="edit" size={30} color='orange'style={{ padding: '10%'}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity  onPress={()=> deleteAnimal(itemData.item)}>
                    <AntDesign name="delete" size={30} color='red' style={{ padding: '10%'}} />
                    </TouchableOpacity>
                    
                    {/* <Ionicons name="md-arrow-round-forward" size={40} color={colorstatus} style={
                        {textAlign:'center'}}/> */}
                </View>
            </View>
        </View>
    )}

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        {/* <Image source={logo} style={styles.logo} /> */}
    <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold', marginVertical: 25 }}>คอก {SelectStallId}</Text>
                        {/* <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}></Text> */}
                    </View>
                    {/* <View style={styles.inputArea}>
                        <TextInput placeholder="ค้นหาฟาร์ม" style={[styles.input, theme.font]} />
                    </View> */}

                    <View style={styles.buttonArea}>
                        <FlatList
                            data={animals}
                            renderItem={renderAnimalList}
                            keyExtractor={item => item.id}
                        />
                        {/* <TouchableOpacity style={[styles.button, theme.defaultButton, {width: '100%'}]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ย้อนกลับ</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    uploadImg: {
        borderRadius: 200,
        height: 80,
        width: 80,
        // marginBottom: '5%'

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
        width: '80%',
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
        marginTop: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

AnimalListScreen.navigationOptions = {
    title: 'เลือกคอก',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default AnimalListScreen;

