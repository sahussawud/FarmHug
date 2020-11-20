import React, { useState, useEffect, useRef, useCallback } from "react";
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
    KeyboardAvoidingView,
    Animated

} from "react-native";
import { MaterialIcons,Ionicons } from '@expo/vector-icons';

import style from "../../themes/default";
import theme from "../../themes/default"

import cow2 from "../../assets/home/cow2.png"

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import TopBarProfile from '../../components/header/topBarProfile'
import SegmentedControl from '@react-native-community/segmented-control';
import ActivityRenderComponent from '../../components/activity/ActivityRenderComponent'
import AddActivityModal from '../../components/activity/AddActivityModal'
import { useSelector } from 'react-redux';


const activityScreen = (props) => {
    const activities = useSelector(state => state.Activity.activities)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [Activity, setActivity] = useState([]);
  
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    };

    const segmentActValue = ['ดำเนินการ', 'เสร็จสิ้น'];
    const [segmentActivity, setSegmentActivity] = useState(0);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        modalVisible ? fadeIn() : fadeOut()
    }, [modalVisible])

    const updateActivity = useCallback(()=>{
        if(segmentActivity == 0){
            const filtered = activities.filter(act=> act.status == 'process')
            setActivity(filtered)
        }else if(segmentActivity ===1){
            const filtered = activities.filter(act=> act.status == 'finish').sort((a,b)=> b.updatedAt - a.updatedAt)
            setActivity(filtered)
        }
    })

    useEffect(()=>{
        updateActivity()
    },[segmentActivity, modalVisible, setActivity])

    const navigateProps = props.navigation.getParam('type')
    const selectedItem = props.navigation.getParam('selectedItem')

    useEffect(() => {
        if (navigateProps) {
            setModalVisible(true)
        }
    }, [navigateProps, selectedItem])

    const submitForm = () => {
        
    }

    const renderSegmentContent = () => {
        // console.log('renderSegmentContent', ACTIVITIES);
            return (<ActivityRenderComponent updateActivity={updateActivity} activities={Activity} isActivityButton={ segmentActivity==0 } />);
        
    }


    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: 'white' },]}>
            <TopBarProfile navigation={props.navigation}/>
            <AddActivityModal type={navigateProps || 'farm'} selectedItem={selectedItem} modalVisible={modalVisible} setModalVisible={() => setModalVisible(prev => !prev)} navigation={props.navigation} />
            <View style={{ flex: 0.15, paddingHorizontal: 10 }}>
                {/* <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', color: '#708090' }}>สถานะฟาร์มวันนี้</Text> */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.layback1}>
                        <SegmentedControl
                            style={{ width: '50%', marginBottom: '5%', }}
                            values={segmentActValue}
                            selectedIndex={segmentActivity}
                            onChange={(event) => {
                                setSegmentActivity(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />
                    </View>
                </View>
            </View>
            { modalVisible ? <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} /> : <View />}
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
            <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10, width: 60, height: 60, borderRadius: 30, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => { setModalVisible(prev => !prev) }}
            >
                {/* <MaterialIcons name="add" size={40} color="white" /> */}
                <Ionicons name="ios-notifications-outline" size={40} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
    },
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
        alignItems: "center",
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

activityScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default activityScreen;
