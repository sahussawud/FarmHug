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
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import logo from "../../assets/home/farmer.png"
import style from "../../themes/default";
import theme from "../../themes/default"
import * as ImagePicker from 'expo-image-picker';


import SelectInput from 'react-native-select-input-ios'
import { FARMS } from '../../data/data-dummy'

class Component extends React.Component {
    render() {
      const options = [{ value: 0, label: '0' }]
      
      return (
        <View>
          <SelectInput value={0} options={options} />
        </View>
      )
    }
  }
const comScreen  = (props) => {
    const [farms, setFarms] = useState([]);
    const submitForm = () => {
        props.navigation.navigate('postScreen')
    }

    const pickImage = async (event) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage({ uri: result.uri });
        }
    };

    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.screen}>
                <View style={styles.profile}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', marginLeft: '2%'}}>ชื่อ: -</Text>
                </View>
                </View>

                <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold',color:'#708090', marginLeft: '2%'}}>โพสทั้งหมด</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.layback2}>

                    </View>
                </View>
        
                        <TouchableOpacity style={[styles.button]} onPress={submitForm}>
                            <Text style={{ ...theme.font, textAlign: 'center' }}>โพสลงชุมชน</Text>
                        </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    

    );
};


const styles = StyleSheet.create({
    profile:{
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
    fonts:{
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
        alignItems: 'center',
        borderRadius: 50,
    },
    button1: {
        flex: 1,
        flexDirection: 'column',
        width: '40%',
        marginBottom: '5%',
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
        flex: 3,
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
        borderRadius: 30
    },
    privacyaccept: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    layback1:{
        flex: 1,
        width: 300,
        height: 120,
        backgroundColor: '#F5F5F5',  
        marginBottom: '10%', 
        borderRadius: 15,
        // alignItems: "center",
    },
    layback2:{
        flex: 1,
        width: 300,
        height: 200,
        backgroundColor: '#F5F5F5',  
        marginBottom: '10%', 
        borderRadius: 15,
        alignItems: "center",
    },
    layback2:{
        flex: 1,
        width: 200,
        height: 150,
        backgroundColor: '#F5F5F5',  
        marginBottom: '10%', 
        borderRadius: 15,
        alignItems: "center",
    }
});

comScreen .navigationOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default comScreen;
