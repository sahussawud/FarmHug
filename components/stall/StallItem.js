import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";


import theme from "../../themes/default"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import cow from "../../assets/home/cow.png"
import grass from "../../assets/home/grass.png"
import water from "../../assets/home/water-drop.png"
import plant from "../../assets/home/plant.png"

import moment from 'moment';


const StallRender = (props) => {
    const { stalls, isActivityButton, navigation } = props

    const create_stall_event = (stall) =>{
        navigation.navigate("activity", { type: 'stall', selectedItem: stall})
    }

    const toStallScreen =()=>{
        navigation.navigate("farm")
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
        <View style={{ marginBottom: 10 }} >
                <View style={{  alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={toStallScreen}>
                        <View style={{ flexDirection: 'row' }}>
                            
                                    <View>
                                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {stalls.name} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> <Image source={cow} style={{ width: 20, height: 20 }} /> {stalls.currentAnimal}/{stalls.maximumAnimal} </Text>
                                        {/* <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> ความจุ {stalls.maximumAnimal}</Text> */}
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> <Image source={grass} style={{ width: 20, height: 20 }} />อาหาร {stalls.food} </Text>
                                    </View>
                                    <View >
                                        <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', height: 30, paddingTop: 8, justifyContent: 'center' }}> <MaterialIcons name="update" size={15} color="green" /> {moment(stalls.updatedAt).fromNow()} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> <Image source={water} style={{ width: 20, height: 20 }} /> น้ำ {stalls.water} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}>  <Image source={plant} style={{ width: 20, height: 20 }} /> มูล {stalls.manure}</Text>
                                        {/* <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}>  พื้นที่  {stalls.area} </Text> */}
                                    </View>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    { isActivityButton ?(<View style={{ flex: 0.4, }}>
                        <TouchableOpacity style={[styles.button]} onPress={()=>create_stall_event(stalls)}>
                            <Text style={{ ...theme.font, textAlign: 'center',color:'white' }}><Ionicons name="ios-notifications-outline" size={20} color="white" /> เพิ่มกิจกรรม</Text>
                        </TouchableOpacity>
                    </View>) : <View/>}
                </View>
            </View>
    
    )

}

export default StallRender;