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
import StallItem from './StallItem'


const StallRender = (props) => {

    const renderStallList = (itemData) => {
        return (<StallItem stalls={itemData.item} isActivityButton={true} navigation={props.navigation}/>)
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