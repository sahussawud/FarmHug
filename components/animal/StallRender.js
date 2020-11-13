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
import cow from "../../assets/home/cow.png"
import grass from "../../assets/home/grass.png"
import water from "../../assets/home/water-drop.png"
import plant from "../../assets/home/plant.png"

import moment from 'moment';


const StallRender = (props) => {
    const dispatch = useDispatch()

    const stallDetail = () => {
        // props.navigation.navigate("animaladdscreen")
    }

    const addEventStall = () => {
    }

    const renderStallList = (itemData) => {

        return (
            <View style={{ marginBottom: 10 }} >
                <View style={{ flexDirection: 'colums', alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={stallDetail}>
                        <View>
                            <Text style={{ ...theme.font, marginBottom: '1%', marginLeft: '40%', marginTop: '2%' }}>คอก 1</Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around' }}>
                                <Image source={cow} style={{ width: 35, height: 35}} />
                                <Text style={{ ...theme.font,  }}>จำนวนวัว:</Text>
                                <Text style={{ ...theme.font,  }}> 0/0  ตัว</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around' }}>
                                <Image source={grass} style={{ width: 35, height: 35 }} />
                                <Text style={{ ...theme.font }}>อาหาร: </Text>
                                <Text style={{ ...theme.font }}>จัดการแล้ว</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around' }}>
                                <Image source={water} style={{ width: 35, height: 35 }} />
                                <Text style={{ ...theme.font }}>น้ำ: </Text>
                                <Text style={{ ...theme.font }}>จัดการแล้ว</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around' }}>
                                <Image source={plant} style={{ width: 35, height: 35 }} />
                                <Text style={{ ...theme.font }}>มูลสัตว์: </Text>
                                <Text style={{ ...theme.font }}>จัดการแล้ว</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    <View style={{ flex: 0.4, }}>
                        <TouchableOpacity style={[styles.button]} onPress={addEventStall}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'white' }}>เพิ่มกิจกรรม</Text>
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
            data={props.stalls}
            renderItem={renderStallList}
            keyExtractor={item => item.id}
        />
    );

}

export default StallRender;