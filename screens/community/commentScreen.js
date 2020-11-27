import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,

} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import theme from "../../themes/default"

import cow2 from "../../assets/home/cow2.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import TopBarProfile from '../../components/header/topBarProfile'
import SegmentedControl from '@react-native-community/segmented-control';
import { useSelector } from 'react-redux';
import PostComponent from '../community/components/postComponent'
import CommentComponent from '../community/components/commentComponent'
// import { COMMENTS } from '../../data/data-dummy'

const CommentScreen = (props) => {
    const [commment, setComment] = useState([])
    const post = props.navigation.getParam('post')

    // useEffect(()=>{
    //     const thisPostComment = COMMENTS.filter(comment => comment.post_id === post.id)
    //     setComment(thisPostComment)
    // },[])

    const addPost = () =>{
        props.navigation.navigate('postScreen', { type: 'comment', post_id: post.id })
    }

    const renderComments = () =>{
        return (<CommentComponent comments={commment} />)
    }

    const renderPost = () => {
        return (<PostComponent posts={[post]} isComment={true} navigation={props.navigation} />)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBarProfile navigation={props.navigation}/>

            <View style={{ flex: 1.4 }}>
                <View style={styles.screen}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback2} >
                            <ScrollView style={{ width: '100%', borderRadius: 10, backgroundColor: 'white' }}>
                                <View>
                                { renderPost() }
                                {renderComments()}
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, width: 60, height: 60, borderRadius: 30, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
            onPress={addPost}
            >
                <MaterialIcons name="forum" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        textAlign: 'center',
        marginBottom: '5%',
        height: 40,
        // paddingHorizontal: 40,

        borderRadius: 2
    },
    profile: {
        flex: 1,
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
    buttonArea: {
        flex: 3,
        flexDirection: 'column',
        width: '100%',
        marginBottom: '25%',
    },
    inputArea: {
        flex: 3,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5%'
    },
    button: {
        flex: 0.6,
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '3%',
        marginTop: '4%',
        // paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color,
        justifyContent: "center",
        alignItems: "center",
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1: {
        flex: 1,
        width: 300,
        // height: 120,
        backgroundColor: 'white',
        // marginBottom: '10%',
        paddingHorizontal: '5%',
        // marginTop:'5%',
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2: {
        flex: 1,
        width: '60%',
        backgroundColor: '#F5F5F5',
        marginBottom: 0,
        borderRadius: 15,
        alignItems: "center",
    }
});

CommentScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default CommentScreen;
