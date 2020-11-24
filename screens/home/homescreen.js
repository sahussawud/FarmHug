import React, { useState, useEffect, useCallback } from "react";
import { useIsFocused } from '@react-navigation/native';
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
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/home/farmer.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import cow from "../../assets/home/cow.png"
import check from "../../assets/home/check.png"
import grass from "../../assets/home/grass.png"
import group from "../../assets/home/group.png"
import house from "../../assets/home/house.png"
import plant from "../../assets/home/plant.png"
import water from "../../assets/home/water-drop.png"
import wait from "../../assets/home/wait.png"


import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
// const preview = require('../../assets/farm_profile.jpg');
import { Fontisto } from '@expo/vector-icons';
import { FARMS } from '../../data/data-dummy'
import { useSelector } from 'react-redux';
import ActivityRenderComponent from '../../components/activity/ActivityRenderComponent'
import moment from 'moment'

import TopBarProfile from '../../components/header/topBarProfile';

const homeScreen = (props) => {
    const Farm = useSelector(state => state.Farm)
    const activities = useSelector(state => state.Activity.activities)

    // const isFocused = useIsFocused();

    const [status, setStatus] = useState({
        animalUnit: 0,
        stallUnit: 0,
        finishTask: 0,
        processTask: 0,
        farm: 0,
        fertilizer: 0,
        water: 0,
        food: 0,
        TodayActvity: []
    })

    const updateStatus = () => {
        console.log('updateStatus');
        const newAct = activities.filter(act => moment(act.alertDate) >= moment().subtract(1, 'days'))
        const TodayActvity = activities.filter(act => moment(act.alertDate) >= moment().subtract(1, 'days')).sort((a, b) => a.alertDate - b.alertDate)
        setStatus(prev => ({
            ...prev,
            animalUnit: Object.keys(Farm.animal).length,
            stallUnit: Object.keys(Farm.stall).length,
            finishTask: newAct.filter(task => task.status === 'finish').length,
            processTask: newAct.filter(task => task.status === 'process').length,
            TodayActvity: TodayActvity
        }))
    }

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('didFocus', () => updateStatus());
    
        return unsubscribe;
      }, [props.navigation]);

    const renderActivitiesList = () => {
        return (<ActivityRenderComponent activities={status.TodayActvity} isActivityButton={false} />)
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <TopBarProfile navigation={props.navigation}/>
            <View style={{ flex: 0.8, paddingHorizontal: 10 }}>
                <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>สถานะฟาร์มวันนี้</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.layback1}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={cow} style={{ width: 35, height: 35, marginBottom: '5%', marginLeft: '2%', marginTop: '2%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>{status.animalUnit}</Text>
                            <Image source={house} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>{status.stallUnit}</Text>
                            <Image source={grass} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                            <Image source={water} style={{ width: 35, height: 35, marginLeft: '11%', marginTop: '2%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginTop: '4%' }}>-</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image source={check} style={{ width: 35, height: 35, marginBottom: '5%', marginLeft: '2%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}> {status.finishTask}</Text>
                            <Image source={wait} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>{status.processTask}</Text>
                            <Image source={group} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                            <Image source={plant} style={{ width: 35, height: 35, marginLeft: '11%', marginBottom: '50%' }} />
                            <Text style={{ ...theme.font, marginBottom: '5%', marginLeft: '3%', marginBottom: '4%' }}>-</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1.5 }}>
                <View style={styles.screen}>

                    <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>กิจกรรมภายในฟาร์ม</Text>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback2} >
                            <ScrollView style={{ width: '100%' }}>
                                {renderActivitiesList()}
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    profile: {
        flex: 1,
        flexDirection: 'row'
    },
    screen: {
        flex: 0.94,
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
        height: 120,
        backgroundColor: '#F5F5F5',
        marginBottom: '10%',
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

homeScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default homeScreen;
