import React, { useState } from "react";
import {
    View,
    Text,

    StyleSheet,
    TouchableOpacity,

    SafeAreaView,
    ScrollView,

    FlatList
} from "react-native";
import { Entypo, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-community/picker';
import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"

import { STALLS } from '../../data/data-dummy'
const SelectStallScreen = (props) => {
    const [stall, setStall] = useState(STALLS);
    
    const selectStall = (stall_id, currentAnimal, name) => {

        props.navigation.navigate("animaladdscreen", { stall_id:stall_id, currentAnimal: currentAnimal, stall_name:name  })
    }

    const colorStatus = (current, max) => current/max > 0.5 ? 'orange' : current == max ? 'red' : 'green';

    const submitForm=()=>{
        props.navigation.navigate('finishscreen')
    }

    const renderStallList = (itemData) => {
        const colorstatus = colorStatus(itemData.item.currentAnimal, itemData.item.maximumAnimal);
        return (
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>selectStall(itemData.item.stall_id, itemData.item.currentAnimal,itemData.item.name )}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10, borderRadius: 10 }}>
                {/* <View style={styles.uploadImg}>
                    <Image style={styles.uploadImg} source={{ uri: itemData.item.imgUrl }} />
                </View> */}
                <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                    <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold' }}>ชื่อคอก : {itemData.item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="cow" size={24} color={colorstatus} />
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold', color:colorstatus }}>{itemData.item.currentAnimal}/{itemData.item.maximumAnimal} ตัว</Text>
                    </View>
                    {/* <Text style={{ ...theme.font, fontSize: 13 }}>{itemData.item.address}</Text> */}
                </View>
                <View style={{ width: '40%', justifyContent:'center'}}>
                    <Ionicons name="md-arrow-round-forward" size={40} color={colorstatus} style={{textAlign:'center'}}/>
                </View>
            </View>
        </TouchableOpacity>
    )}

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.topArea}>
                        {/* <Image source={logo} style={styles.logo} /> */}
                        <Text style={{ ...theme.font, fontSize: 25, fontWeight: 'bold', marginVertical: 25 }}>เลือกคอก</Text>
                        {/* <Text style={{ ...theme.font, fontSize: 14, fontWeight: 'bold' }}></Text> */}
                    </View>
                    {/* <View style={styles.inputArea}>
                        <TextInput placeholder="ค้นหาฟาร์ม" style={[styles.input, theme.font]} />
                    </View> */}

                    <View style={styles.buttonArea}>
                        <FlatList
                            data={stall}
                            renderItem={renderStallList}
                            keyExtractor={item => item.id}
                        />
                        <TouchableOpacity style={[styles.button, theme.defaultButton, {width: '100%'}]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>เสร็จสิ้น</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    );
};


const styles = StyleSheet.create({
    uploadImg: {
        borderRadius: 200,
        height: 80,
        width: 80,
        // marginBottom: '5%'

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
        width: '80%',
        textAlign: 'center',
        marginBottom: '5%',
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
        flexDirection: 'column',
        width: '80%',
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
        marginTop: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});

SelectStallScreen.navigationOptions = {
    title: 'เลือกคอก',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default SelectStallScreen;

