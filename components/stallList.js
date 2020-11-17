import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from "../themes/default"

const StallList = (props) => {
    return (
        <View style={{ marginBottom: 10 }} id={props.id} key={props.id}>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 1, padding: 10 }}>
                <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold', position: "absolute", top: 0, left: 0 }}>#{props.id}</Text>
                <View style={{ flexDirection: 'column', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ความจุ</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>{props.capacity}</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ตัว</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>พื้นที่</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>{props.area}</Text>
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20 }}>ตร.ม</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        {/* <TouchableOpacity style={[styles.button, theme.successButton, {  marginBottom: 20 }]}>
                        <Text style={{ ...theme.font, textAlign: 'center' }}><Ionicons name="ios-add-circle-outline" size={24} color="black" /> เพิ่ม</Text>
                    </TouchableOpacity> */}
                        <TouchableOpacity style={[styles.button, theme.dangerButton, { marginBottom: 20, alignContent: 'center', width: '40%' }]} key={props.id}
                        onPress={(e)=>{
                            
                            props.setstall(prev=> {
                                const stalls = prev.filter(stall=> stall.id == props.id)
                                return stalls;
                            })
                        }}
                        >
                            <Text style={{ ...theme.font, textAlign: 'center' }}> ยกเลิก</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        borderColor: 'black',
        //borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: theme.defaultButton.backgroundColor,
        color: theme.defaultButton.color
    }
});

export default StallList;