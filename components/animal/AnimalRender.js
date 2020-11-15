import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delete_animal } from '../../store/actions/farmAction'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';


const AnimalFlatListRender = (props) => {
    const dispatch = useDispatch()

    const editAnimal = (animal) => {
        props.navigation.navigate("animaladdscreen", { type: 'edit', animal: animal, stall_id: SelectStallId })
    }

    const deleteAnimal = (animal) => {
        dispatch(delete_animal(animal))
    }

    const colorStatus = (current, max) => current >= max ? 'red' : current / max > 0.5 ? 'orange' : 'green';


    const renderAnimalList = (itemData) => {
        console.log(itemData.item);
        const colorstatus = colorStatus(itemData.item.currentAnimal, itemData.item.maximumAnimal);
        return (
            <View style={{ marginBottom: 10 }} >
                <View style={{  alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image style={styles.uploadImg} source={itemData.item.imageUrl ? { uri: itemData.item.imageUrl } : require('../../assets/farm_profile.jpg')} />
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: '20%' }}>
                                    <View>
                                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {itemData.item.type} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> พันธุ์ {itemData.item.gene} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> น้ำหนัก {itemData.item.weight}</Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> สูง {itemData.item.height} </Text>

                                    </View>
                                    <View >
                                        <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', height: 30, paddingTop: 8, justifyContent: 'center' }}> <MaterialIcons name="update" size={15} color="green" /> {moment(itemData.item.dob).fromNow()} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> คอก {itemData.item.stall_id} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> เพศ {itemData.item.sex == 'M' ? 'ตัวผู้' : 'ตัวเมีย'}</Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> อายุ  {moment(itemData.item.dob).fromNow('YYMMYY')} </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    <View style={{ flex: 0.4, }}>
                        <TouchableOpacity style={[styles.button]}>
                            <Text style={{ ...theme.font, textAlign: 'center',color:'white' }}>เพิ่มกิจกรรม</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        uploadImg: {
            borderRadius: 5,
            height: 100,
            width: 100,
            // marginBottom: '5%'
        },
        button: {
            flex: 0.6,
            borderColor: 'black',
            //borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            // marginHorizontal: '3%',
            marginTop: '4%',
            // paddingVertical: '3%',
            backgroundColor: "#407BBF",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
        }
    })

    return (
        <FlatList
            data={props.animals}
            renderItem={renderAnimalList}
            keyExtractor={item => item.id}
        />
    );

}

export default AnimalFlatListRender;