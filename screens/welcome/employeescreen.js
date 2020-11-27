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
    Platform,
    FlatList
} from "react-native";
import { Entypo } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
const preview = require('../../assets/farm_profile.jpg');


import { useDispatch } from 'react-redux';
import { create_farm, update_farm } from '../../store/actions/farmAction'

import { useCallback } from "react";
// import { ANIMALS, FARMS, STALLS } from "../../data/data-dummy";
import { useQuery } from "@apollo/client";
import { getFarms } from "../../data/graphl_query";


const employeeScreen = (props) => {
    const dispatch = useDispatch();
    const {data,loading} = useQuery(getFarms)

    const [searchbox, setSearchbox] = useState('')
    const [farms, setFarms] = useState([]);

    const selectfarm = (farm) => {
        // const selectFarm = FARMS.find(farm=> farm.id === farm_id)
        // const farmStall = STALLS.find(stall=> stall.farm_id=== farm_id)
        // const farmAnimal = ANIMALS.find(animal=> animal.farm_id === farm_id)
        // dispatch(update_farm(selectFarm, farmStall, farmAnimal))
        dispatch(create_farm(farm))
        props.navigation.navigate("finishscreen")
    }

    const findMatchFarm = useCallback(() =>{
        //Temporary mockup data
        const matchfarm = farms.filter(farm=> farm.name.includes(searchbox) || farm.address.includes(searchbox))
        setFarms(matchfarm)
    })
    
    useEffect(()=>{
        findMatchFarm();
    },[searchbox])

    useEffect(()=>{
        if(data){
           setFarms(data.farms) 
        }
        
    },[data, loading])
    const renderFarmList = (itemData) => (
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>selectfarm(itemData.item)}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10 }}>
                <View style={styles.uploadImg}>
                    <Image style={styles.uploadImg} source={itemData.item.imageURL ? { uri: itemData.item.imageURL } :preview} />
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

    return (
        <SafeAreaView style={{flex:1, width:'100%'}}>
            <View style={styles.topArea}>
                <Image source={logo} style={styles.logo} />
                <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ค้นหาฟาร์มของคุณ</Text>
                {/* <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับคุณให้เราฟังหน่อย</Text> */}
                <TextInput placeholder="ชื่อฟาร์ม" style={[styles.input, theme.font]} value={searchbox} onChangeText={setSearchbox} />
            </View>
            <View style={{ flex: 2}}>
               <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.buttonArea}>
                        <FlatList
                            data={farms}
                            renderItem={renderFarmList}
                            keyExtractor={item => item.id}
                        />
                        {/* <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                        </TouchableOpacity> */}
                    </View>

                </View>
            </ScrollView> 
            </View>
            
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
        flex: 1,
        // marginBottom: 20,
        alignItems: 'center',
        backgroundColor:'white',
        justifyContent: 'center'
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

employeeScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default employeeScreen;
