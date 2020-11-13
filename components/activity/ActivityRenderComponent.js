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

import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import moment from 'moment';


const ActivityRenderComponent = (props) => {
    const dispatch = useDispatch()

    const stallDetail = () => {
        // props.navigation.navigate("animaladdscreen")
    }

    const addEventStall = () => {
    }

    const ActivityDetail = () =>{
        
    }
    

    const renderActivityList = (itemData) => {
        const activityScopeId = itemData.item.type === 'animal'? itemData.item.animal_id : itemData.item.type === 'stall' ? itemData.item.stall_id : itemData.item.farm_id;
        return (
            <View style={{ marginBottom: 10 }} >
                <View style={{ flexDirection: 'colums', alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={()=>ActivityDetail(itemData.item.type, activityScopeId)}>
                        <View style={{ alignItems: 'flex-start' }}>
                        
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {itemData.item.name} </Text>
                                    <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', height: 30, paddingTop: 8, justifyContent: 'center' }}> <MaterialIcons name="update" size={15} color="green" /> {moment(itemData.item.updatedAt).fromNow()} </Text>
                                </View>
                                <View>
                                    <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> รายละเอียด : {itemData.item.detail} </Text>
                                </View>
                                
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> ขอบเขต: {itemData.item.type === 'animal'? 'ปศุสัตว์' : itemData.item.type === 'stall' ? 'คอกเลี้ยง' : 'ฟาร์ม'} </Text>
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> เเจ้งเตือน : {moment(itemData.item.alertDate).calendar()} </Text>
                            
                        </View>
                    </TouchableOpacity>

                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    <View style={{ flex: 0.4, flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                        <TouchableOpacity style={[styles.button, theme.successButton]} onPress={addEventStall}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize:18 }}>เสร็จสิ้น</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: 'yellow'}]} onPress={addEventStall}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize:18 }}>เลื่อน</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, theme.dangerButton]} onPress={addEventStall}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize:18 }}>ยกเลิก</Text>
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
            // flex: 0.5,
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
            width: "30%"
        }
    })

    return (
        <FlatList
            data={props.activities}
            renderItem={renderActivityList}
            keyExtractor={item => item.id}
        />
    );

}

export default ActivityRenderComponent;