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


import theme from "../../../themes/default"

import { useDispatch } from 'react-redux';
import { MaterialIcons, Fontisto } from '@expo/vector-icons';
import logo from "../../../assets/home/farmer.png"
import moment from 'moment';

const postComponent = (props) => {
    const dispatch = useDispatch()


    const addEventStall = () => {
    }

    const ActivityDetail = () => {

    }


    const renderPostList = (itemData) => {
        const activityScopeId = itemData.item.type === 'animal' ? itemData.item.animal_id : itemData.item.type === 'stall' ? itemData.item.stall_id : itemData.item.farm_id;
        return (
            <View style={{ marginBottom: 10 }} >
                <View style={{ alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() => ActivityDetail(itemData.item.type, activityScopeId)}>
                        <View style={{ alignItems: 'flex-start' }}>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center', padding: 10 }}>
                                        <Image source={logo} style={styles.logo} />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: "600", marginLeft: '2%', lineHeight: 17 }}>สหัสวรรษ ขันรักษา</Text>
                                        {/* <Text style={{ ...theme.font, fontSize: 13, fontWeight: 'bold', marginLeft: '2%', lineHeight: 16 }}>ฟาร์มเเสนสุข</Text> */}
                                    </View>
                                </View>

                                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 5 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                    <AntDesign name="ellipsis1" size={24} color="black" />
                                    </View>
                                </View> */}
                            </View>

                            <View>
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> {itemData.item.detail} </Text>
                            </View>

                            {/* <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> ขอบเขต: {itemData.item.type === 'animal' ? 'ปศุสัตว์' : itemData.item.type === 'stall' ? 'คอกเลี้ยง' : 'ฟาร์ม'} </Text>
                            <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> เเจ้งเตือน : {moment(itemData.item.alertDate).calendar()} </Text> */}

                        </View>

                    </TouchableOpacity>

                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    <View style={{ flex: 0.4, flexDirection: 'row', width: '100%', justifyContent: 'center', paddingTop: 5}}>

                        <TouchableOpacity onPress={addEventStall} style={{ flex: 1, flexDirection: 'row', justifyContent:'center', borderRadius:10 , ...theme.successButton }}>
                            {/* <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18 }}>เลื่อน</Text> */}
                            {/* <FontAwesome5 name="comment" size={20} color="black" /> */}
                            <AntDesign name="check" size={24} color="black" />
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18, marginHorizontal: 10 }}>ยืนยัน</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={addEventStall} style={{ flex: 1, flexDirection: 'row', justifyContent:'center',borderRadius:10 , ...theme.dangerButton }}>
                            <AntDesign name="close" size={24} color="black" />
                            <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18, marginHorizontal: 10 }}>ปฎิเสธ</Text>
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
        },
        button: {
            borderColor: 'black',
            borderRadius: 5,
            textAlign: 'center',
            marginTop: '4%',
            // backgroundColor: "#407BBF",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            width: "30%"
        },
        logo: {
            width: 30,
            height: 30,
            marginBottom: 5,
        }
    })

    return (
        <FlatList
            data={props.posts}
            renderItem={renderPostList}
            keyExtractor={item => item.id}
        />
    )
}

export default postComponent;