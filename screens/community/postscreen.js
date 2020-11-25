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
    FlatList,
    fixed
} from "react-native";

import theme from "../../themes/default"

import { FARMS } from '../../data/data-dummy'
import { useSelector } from 'react-redux';
import TopBarProfile from '../../components/header/topBarProfile'
import Post from '../../models/post'
import Comment from '../../models/comments'
import {createAlert} from '../../data/fetching'

import {ADD_NEW_COMMENT,ADD_NEW_POST} from '../../data/graphl_mutation'
import { useMutation } from "@apollo/client";



const postScreen = (props) => {
    const type = props.navigation.getParam('type')
    const User = useSelector(state=> state.User.profile)
    const post_id = props.navigation.getParam('post_id')

    const [addNewPost, {data:postData, error:postError}] = useMutation(ADD_NEW_POST)
    const [addNewComment, {data:commentData, error:commentError}] = useMutation(ADD_NEW_COMMENT)
    const [post, setPost] = useState(new Post(undefined, false, User.farm_id, User._id, "", "", 0, new Date().toUTCString()));
    const [comment, setComment] = useState(new Comment(undefined, User.farm_id, post_id, User._id, "", '',new Date().toUTCString()))
    useEffect(()=>{
        if(postData || commentData){
           props.navigation.goBack() 
        }
        if(postError){
            createAlert('เกิดปัญหาขึ้น', 'ไม่สามารถโพสต์ได้')
        }
        if (commentError) {
            createAlert('เกิดปัญหาขึ้น', 'ไม่สามารถคอมเมนท์ได้')
        }
    },[postData,commentData,postError,commentError

    ])

    const submitForm = async() => {
        try {
           if(type==="post"){
            console.log(post);
            await addNewPost({variables: post})
        }else if(type==='comment'){
            await addNewComment({variables:comment})
          
        } 
        } catch (error) {
            console.log(JSON.stringify(error, null, 2))
        }
        
       
    }

    const changePost = (bodyChange) =>{
        if(type==="post"){ 
            setPost(prev=> ({ ...prev, ...bodyChange}))
        }else if(type==="comment"){
            setComment(prev=> ({ ...prev, ...bodyChange}))
        }
        
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBarProfile navigation={props.navigation} />
            <View style={styles.screen}>

                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', color: '#708090', marginLeft: '2%' }}> { type==="post" ? 'แชร์เรื่องราวของคุณ' : 'ความเห็นของคุณ'}</Text>
                <View style={{ flex: 1 }}>
                    <View style={styles.layback2}>
                        <ScrollView>
                            <View>
                                <TextInput placeholder={type==="post" ? "ใส่เรื่องราวที่คุณต้องการเเชร์": "เเสดงความคิดเห็นของคุณที่นี่"}
                                    multiline={true}
                                    numberOfLines={5}
                                    style={[{ textAlign: 'auto' }, theme.font]}
                                    value={type==="post" ? post.detail: comment.detail}
                                    onChangeText={(text)=>changePost({ detail:text })}
                                    maxLength={255}
                                />
                            </View>

                        </ScrollView>
                        { type==="post" ? ( <View style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', position: 'absolute', bottom: 0, right: 0 }}>
                            <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', color: '#708090' }}>สาธารณะ</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={post.isPublic ? "#FFFFFF" : "#767577"}
                                onValueChange={(value)=>changePost({ isPublic:value })}
                                value={post.isPublic}
                            />
                        </View>): (<View/>)}
                        {/* <View style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', position: 'absolute', bottom: 0, right: 0 }}>
                            <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', color: '#708090' }}>สาธารณะ</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={post.isPublic ? "#FFFFFF" : "#767577"}
                                onValueChange={(value)=>changePost({ isPublic:value })}
                                value={post.isPublic}
                            />
                        </View> */}
                    </View>
                    <View style={{ height: 50}}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                    <Text style={{ ...theme.font, textAlign: 'center' }}>{ type==="post" ? "โพสต์" : "เเสดงความคิดเห็น"}</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    profile: {
        flexDirection: 'row'
    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10
    },
    fonts: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    topArea: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center'
    },
    button1: {
        flex: 1,
        flexDirection: 'column',
        width: '40%',
        marginBottom: '5%',
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'column',
        // width: '100%',
        // marginBottom: '25%',
    },
    inputArea: {
        flex: 3,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5%'
    },
    button: {
        flex: 1,
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color,
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1: {
        flex: 1,
        width: 300,
        height: 120,
        backgroundColor: '#F5F5F5',
        marginBottom: '10%',
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2: {
        // flex: 0.6,
        height: 250,
        backgroundColor: '#F5F5F5',
        marginBottom: '10%',
        borderRadius: 15,
        // alignItems: "center",
    }
});

postScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default postScreen;
