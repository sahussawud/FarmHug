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
    StatusBar
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';

import style from "../../themes/default";
import theme from "../../themes/default"

import cow2 from "../../assets/home/cow2.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import TopBarProfile from '../../components/header/topBarProfile'
import SegmentedControl from '@react-native-community/segmented-control';
import { useSelector } from 'react-redux';
import PostComponent from '../community/components/postComponent'

// import { POSTS } from '../../data/data-dummy'

import { manypostdata } from '../../data/graphl_query'
import { useQuery } from "@apollo/client";

const CommunityScreen = (props) => {
    const [POSTS, setPost] = useState([])
    const { data , loading, error } = useQuery(manypostdata)
    const User = useSelector(state => state.User.profile)
    const segmentValue = ['ระเเวกฟาร์ม', 'ฟาร์มของฉัน'];
    const [selectSegment, setselectSegment] = useState(0);

    useEffect(()=>{
        console.log(data);
        data ? setPost(data.posts) : setPost([])
    },[data])

    const addPost = () => {
        props.navigation.navigate('postScreen', { type: 'post' })
    }

    const renderSegmentContent = (value) => {
        if (value === 0) {
            return (<PostComponent posts={POSTS} navigation={props.navigation} isComment={false} />)
        } else {
            const myFarmPost = POSTS.filter(post => post.farm_id === User.farm_id)
            return (<PostComponent posts={myFarmPost} navigation={props.navigation} isComment={false} />)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBarProfile navigation={props.navigation} />
            <View style={{ flex: 0.15, paddingHorizontal: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.layback1}>
                        <SegmentedControl
                            values={segmentValue}
                            selectedIndex={selectSegment}
                            onChange={(event) => {
                                setselectSegment(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />
                    </View>
                </View>
            </View>

            <View style={{ flex: 1.4 }}>
                <View style={styles.screen}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback2} >
                            <ScrollView style={{ width: '100%', borderRadius: 10, backgroundColor: 'white' }}>
                                <View>
                                    {selectSegment === 0 ? renderSegmentContent(0) : renderSegmentContent(1)}
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, width: 60, height: 60, borderRadius: 30, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                onPress={addPost}
            >
                <MaterialIcons name="add" size={40} color="white" />
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

CommunityScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default CommunityScreen;
