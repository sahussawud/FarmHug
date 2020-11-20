import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';

import logo from "../../assets/logo.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delete_animal } from '../../store/actions/farmAction'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';


const AnimalItemComponent = (props) => {
    const { Animal, isActivityButton, navigation } = props
    const editAnimal = (animal) => {
        // navigation.navigate("animaladdscreen", { type: 'edit', animal: animal, stall_id: SelectStallId })
    }

    const deleteAnimal = (animal) => {
        dispatch(delete_animal(animal))
    }

    const create_animal_event = (animal) =>{
        console.log('create_animal_event');
        navigation.navigate("activity", { type: 'animal', selectedItem: animal})
    }

    const toAnimalScreen =()=>{
        navigation.navigate("farm")
        props.setModalVisible()
    }

    const colorStatus = (current, max) => current >= max ? 'red' : current / max > 0.5 ? 'orange' : 'green';

    
    const styles = StyleSheet.create({
        uploadImg: {
            borderRadius: 5,
            height: 100,
            width: 100,
            // marginBottom: '5%'
        },
        button: {
            flex: 0.6,
            borderColor: 'black',
            //borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
            // marginHorizontal: '3%',
            marginTop: '4%',
            // paddingVertical: '3%',
            backgroundColor: "#407BBF",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
        }
    })

        return Animal?(
            <View style={{ marginBottom: 10 }} >
                <View style={{  alignContent: 'center', justifyContent: 'center', borderColor: 'black', backgroundColor: '#e6ecf0', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={toAnimalScreen}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image style={styles.uploadImg} source={Animal.imageUrl ? { uri: Animal.imageUrl } : require('../../assets/farm_profile.jpg')} />
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: '20%' }}>
                                    <View>
                                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold' }}> {Animal.name} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> พันธุ์ {Animal.gene} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> น้ำหนัก {Animal.weight}</Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> สูง {Animal.height} </Text>

                                    </View>
                                    <View >
                                        <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', height: 30, paddingTop: 8, justifyContent: 'center' }}> <MaterialIcons name="update" size={15} color="green" /> {moment(Animal.dob).fromNow()} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> คอก {Animal.stall_id} </Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> เพศ {Animal.sex == 'M' ? 'ตัวผู้' : 'ตัวเมีย'}</Text>
                                        <Text style={{ ...theme.font, fontSize: 15, fontWeight: 'bold' }}> อายุ  {moment(Animal.dob).fromNow('YYMMYY')} </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>


                    {/* <View style={{ width: '40%', justifyContent: 'center', flexDirection: 'row', alignContent: 'center', marginLeft: 10 }}>

                    </View> */}
                    { isActivityButton ?(<View style={{ flex: 0.4, }}>
                        <TouchableOpacity style={[styles.button]} onPress={()=>create_animal_event(Animal)}>
                            <Text style={{ ...theme.font, textAlign: 'center',color:'white' }}><Ionicons name="ios-notifications-outline" size={20} color="white" /> เพิ่มกิจกรรม</Text>
                        </TouchableOpacity>
                    </View>) : <View/>}
                </View>
            </View>
        ):(<View/>)
}

export default AnimalItemComponent;