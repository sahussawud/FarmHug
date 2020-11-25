import React, { useState, useEffect, useCallback } from "react";
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
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import logo from "../../assets/logo.png"
import theme from "../../themes/default"

import { FontAwesome5, Entypo } from '@expo/vector-icons';
import MapView, { Marker, animateToRegion } from 'react-native-maps';
import * as Location from 'expo-location';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create_farm } from '../../store/actions/farmAction'

const farmLocationScreen = (props) => {
    const dispatch = useDispatch()
    const farm = useSelector(state => state.Farm.farm)

    const [ address, setAddress] = useState("")
    const [ loading, setLoading] = useState(false)
    const [ location, setLocation ] = useState({
        latitude: 13.736717,
        longitude: 100.523186,
        latitudeDelta: 1,
        longitudeDelta: 1,
    });
    
    useEffect(() => {
        if (farm.location) {
            setLocation(farm.location)
        }
        if (farm.address) {
            setAddress(farm.address)
        }

    }, [farm])

    const updateValueHandle =  useCallback(()=>{
        // console.log(farm)
        dispatch(create_farm({
            ...farm,
            location: location,
            address: address
        }))
    })

    // useEffect(()=>{
    //     updateValueHandle()
    //   },[dispatch, location, address]);

    const [errorMsg, setErrorMsg] = useState(null);

    const getCurrentPos = async () => {
        setLoading(true);
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        // console.log(location);
        setLocation(prev=> ({ ...prev, latitude:location.coords.latitude, longitude: location.coords.longitude}));
        setLoading(false);
    }

    const updateLocation = useCallback(({latitude, longitude})=>{
        // console.log('updateLocation');
        setLoading(true);
        setLocation({latitude, longitude, latitudeDelta: 2, longitudeDelta:2 })
        setLoading(false);
    })

    const submitForm = () => {
        updateValueHandle()
        props.navigation.navigate("stallSetupScreen")
        console.log(farm);
    }

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        // <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1}}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        {/* <Image source={logo} style={styles.logo} /> */}
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ยินดีต้อนรับ</Text>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}>เล่าเกี่ยวกับฟาร์มของคุณให้เราฟังหน่อย</Text>
                    </View>
                    { Platform.OS !== "web"?(<View style={styles.inputArea}>
                        <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold', marginBottom: 10 }}>เเตะเเผนที่เพื่อให้ <FontAwesome5 name="map-marker-alt" size={24} color="red" style={{ textAlign:'center', top: '2%',left:'2%'}} /> เเสดงสถานที่ตั้งของฟาร์ม  </Text>
                        <MapView
                            provider={"google"}
                            showsUserLocation={loading} //to show user current location when given access
                            loadingEnabled
                            showsMyLocationButton={loading}
                            zoomEnabled={true}
                            userLocationPriority={'passive'}
                            minZoomLevel={1}
                            style={{ width: '90%', height: 300 }}
                            initialRegion={location}
                            onUserLocationChange={(e) => updateLocation(e.nativeEvent.coordinate)}
                            onPress={(e)=> updateLocation(e.nativeEvent.coordinate) }
                            // region={location}
                            // mapRef={ref => this.mapView = ref}
                        >
                            <ActivityIndicator size="large" color="#0000ff" animating={loading}/>
                            <Marker draggable
                                coordinate={location}
                                onDragEnd={(e) => updateLocation(e.nativeEvent.coordinate)}
                            />
                            
                        </MapView>
                        
                        <TextInput placeholder="รายละเอียด"
                            multiline={true}
                            numberOfLines={4}
                            style={[styles.input, theme.font]}
                            value={address}
                            onChangeText={setAddress}
                            maxLength={255}
                        />

                    </View>): (<View style={styles.inputArea}>
                        <Text>ไม่รองรับบนเเพทฟอร์มนี้</Text>
                    </View>)}
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={[styles.button, theme.defaultButton]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>ถัดไป</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        // </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "right",
    },
    gridItem: {
        flex: 2,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    uploadImg: {
        borderRadius: 200,
        height: 150,
        width: 150,
        marginBottom: '5%'

    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        textAlign: 'center',
        marginVertical: '5%',
        // paddingHorizontal: 40,
        paddingVertical: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20
    },
    topArea: {
        flex: 3,
        marginBottom: 20,
        alignItems: 'center'
    },
    buttonArea: {
        flex: 3,
        flexDirection: 'column-reverse',
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
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

farmLocationScreen.navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default farmLocationScreen;
