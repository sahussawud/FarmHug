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

const commentComponent = (props) => {

    const commentScreen = (post) => {
        props.navigation.navigate('commentScreen', { post: post })
    }


    const renderCommentList = (itemData) => {       
         return (
            <View style={{ marginBottom: 10 }} >
                <View style={{alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                   
                        <View style={{ alignItems: 'flex-start' }}>
                                
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ justifyContent: 'center', padding: 10 }}>
                                        <Image source={logo} style={styles.logo}/>
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: "600", marginLeft: '2%', lineHeight: 17 }}>สหัสวรรษ ขันรักษา</Text>
                                        <Text style={{ ...theme.font, fontSize: 13, fontWeight: 'bold', marginLeft: '2%', lineHeight: 16 }}>ฟาร์มเเสนสุข</Text>
                                    </View>
                                </View>

                            </View>

                            <View>
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> {itemData.item.detail} </Text>
                            </View>
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
            data={props.comments}
            renderItem={renderCommentList}
            keyExtractor={item => item.id}
        />
    )
}

export default commentComponent;