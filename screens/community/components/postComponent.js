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
    const { isCommment } = props

    const commentScreen = (post) => {
        props.navigation.navigate('commentScreen', { post: post }) 
    }


    const renderPostList = (itemData) => {       
         return (
            <View style={{ marginBottom: 10 }} >
                <View style={{alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() =>commentScreen(itemData.item)}>
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

                                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 5 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                    <AntDesign name="ellipsis1" size={24} color="black" />
                                    </View>
                                </View> */}
                            </View>

                            <View>
                                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> {itemData.item.detail} </Text>
                            </View>
                        </View>
                        
                    <View style={{ flex: 0.4, flexDirection: 'row', width: '100%', justifyContent: 'flex-start', paddingTop: 5 }}>
                        
                            <FontAwesome5 name="comment" size={20} color="black" />
                        
                        <Text style={{ ...theme.font, textAlign: 'center', color: 'black', fontSize: 18, marginHorizontal: 10 }}>2 ความคิดเห็น</Text>

                    </View>
                    </TouchableOpacity>
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