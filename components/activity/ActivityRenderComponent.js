import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import cow2 from "../../assets/home/cow2.png"
import { delete_activity, update_activity } from '../../store/actions/activityAction'

import moment from 'moment';


const ActivityRenderComponent = (props) => {
    const { activities, isActivityButton, updateActivity } = props
    const dispatch = useDispatch()

    const changeStatusTofinish = (activity) => {
        const finish_activity = { ...activity, status: 'finish', updatedAt: new Date() }
        dispatch(update_activity(finish_activity))
        updateActivity()
    }

    const createTwoButtonAlert = (activity) =>
        Alert.alert(
            "ต้องการลบกิจกรรม",
            "กิจกรรม "+activity.name+" จะถูกลบออก",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => updateActivity() }
            ],
            { cancelable: false }
        );

    const deleteActivity = (activity) => {
        
        dispatch(delete_activity(activity))
        updateActivity()

        // createTwoButtonAlert(activity)
    }


    const renderActivityList = (itemData) => {
        // const activityScopeId = itemData.item.type === 'animal' ? itemData.item.animal_id : itemData.item.type === 'stall' ? itemData.item.stall_id : itemData.item.farm_id;
        const backgroundColorCard = itemData.item.status === 'process'? '#ffffde': '#c0f09a'
        return (
            <View style={{ marginBottom: 10 }} >
                <View style={{ alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: backgroundColorCard, padding: 10, borderRadius: 10 }}>
                  
                        <View style={{ alignItems: 'flex-start' }}>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {itemData.item.name} </Text>
                                <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', height: 30, paddingTop: 8, justifyContent: 'center' }}> <MaterialIcons name="update" size={15} color="green" /> {moment(itemData.item.updatedAt).fromNow()} </Text>
                            </View>
                            <View>
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> รายละเอียด : {itemData.item.detail} </Text>
                            </View>

                            <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> ขอบเขต: {itemData.item.type === 'animal' ? 'ปศุสัตว์' : itemData.item.type === 'stall' ? 'คอกเลี้ยง' : 'ฟาร์ม'}</Text>
                            <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> เเจ้งเตือน : {moment(itemData.item.alertDate).calendar()} </Text>
                     
                        </View>
              

                    {isActivityButton ? (<View style={{ flex: 0.4, flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={[styles.button, theme.successButton]} onPress={() => changeStatusTofinish(itemData.item)}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18 }}>เสร็จสิ้น</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={[styles.button, theme.dangerButton]} onPress={() => deleteActivity(itemData.item)}>
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18 }}>ยกเลิก</Text>
                        </TouchableOpacity> */}

                    </View>) : (<View />)}
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
            width: "100%"
        }
    })


    return Object.keys(activities).length > 0 ? (
        <FlatList
            data={activities}
            renderItem={renderActivityList}
            keyExtractor={item => item.id}
        />
    ) : (<View style={{ flex: 1, justifyContent: 'center', padding: '20%', width: '100%' }}>
        <Image source={cow2} style={{ width: 50, height: 50, marginTop: '10%', alignSelf: 'center' }} />
        <Text style={{ ...theme.font, textAlign: 'center', marginTop: '11%', fontSize: 13 }}>ไม่มีกิจกรรมใดๆภายในฟาร์ม</Text>
    </View>)
}

export default ActivityRenderComponent;