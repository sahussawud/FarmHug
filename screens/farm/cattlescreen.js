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
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';

import style from "../../themes/default";
import theme from "../../themes/default"

import cow2 from "../../assets/home/cow2.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import TopBarProfile from '../../components/topBarProfile'
import SegmentedControl from '@react-native-community/segmented-control';
import AnimalFlatListRender from '../../components/animal/AnimalRender';
import StallRender from '../../components/animal/StallRender';
import ActivityRenderComponent from '../../components/activity/ActivityRenderComponent'
import { useSelector } from 'react-redux';

import { ANIMALS, FARMS, STALLS, ACTIVITIES } from '../../data/data-dummy'
const cattleScreen = (props) => {
    const segmentValue = ['ปศุสัตว์', 'คอก'];
    const segmentActValue = ['ดำเนินการ', 'เสร็จสิ้น'];
    const [selectSegment, setselectSegment] = useState(0);
    const [segmentActivity, setSegmentActivity] = useState(0);
    const [searchbox, setSearchbox] = useState('')

    const submitForm = () => { }

    const renderSegmentContent = () => {
        if (selectSegment == 0 && ANIMALS.length > 0) {
            return (<AnimalFlatListRender animals={ANIMALS} />);
        } else if (selectSegment == 1 && STALLS.length > 0) {
            return (<StallRender stalls={STALLS} />);
        } else if (selectSegment == 2) {

            return (<ActivityRenderComponent activities={ACTIVITIES} />);
        } else {
            return (<View style={{ flex: 1, justifyContent: 'center', padding: '20%', width: '100%' }}>
                <Image source={cow2} style={{ width: 50, height: 50, marginTop: '10%', alignSelf: 'center' }} />
                <Text style={{ ...theme.font, textAlign: 'center', marginTop: '11%', fontSize: 13 }}>ไม่มีข้อมูลเกี่ยวกับ{segmentValue[selectSegment]}ในฟาร์ม</Text>
            </View>)
        }
        //    
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBarProfile />
            <View style={{ flex: 0.15, paddingHorizontal: 10 }}>
                {/* <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>สถานะฟาร์มวันนี้</Text> */}
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

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {selectSegment == 2 ? 
                                (
                                <SegmentedControl
                                    style={{width:'50%', marginBottom: '5%',}}
                                    values={segmentActValue}
                                    selectedIndex={segmentActivity}
                                    onChange={(event) => {
                                        setSegmentActivity(event.nativeEvent.selectedSegmentIndex);
                                    }}
                                />
                                )
                         : (<TextInput placeholder={"ค้นหา" + segmentValue[selectSegment]} style={[styles.input, theme.font]} value={searchbox} onChangeText={setSearchbox} />)}

            </View>

            <View style={{ flex: 1.4 }}>
                <View style={styles.screen}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.layback2} >
                            <ScrollView style={{ width: '100%', borderRadius: 10, backgroundColor: 'white' }}>
                                <View>
                                {renderSegmentContent()}
                                </View>
                            </ScrollView>

                        </View>
                    </View>
                </View>
            </View>
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

cattleScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default cattleScreen;
