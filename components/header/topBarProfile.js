import React from 'react';

import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import theme from "../../themes/default"
import logo from "../../assets/setting1/farmer1.png"
import { Fontisto } from '@expo/vector-icons';
import * as RootNavigation from '../../navigation/RootNavigation'
// import { TouchableOpacity } from 'react-native-gesture-handler';

const TopBarProfile = (props) => {
    console.log('TopBarProfile', props);
    return (
        <View style={{ height: '13%' }}>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <View style={styles.profile}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
                            <View style={{ justifyContent: 'center', padding: 10 }}>
                                <Image source={logo} style={styles.logo} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ ...theme.font, fontSize: 20, fontWeight: "600", marginLeft: '2%', lineHeight: 30 }}>สหัสวรรษ ขันรักษา</Text>
                            <Text style={{ ...theme.font, fontSize: 18, fontWeight: 'bold', marginLeft: '2%', lineHeight: 22 }}>ฟาร์มเเสนสุข</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 5 }}>
                        <View style={{ justifyContent: 'center', padding: 10 }}>
                            <Fontisto name="sun" size={30} color="black" />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ ...theme.font, fontSize: 20, fontWeight: 'bold', marginLeft: '2%' }}>27c</Text>
                            <Text style={{ ...theme.font, fontSize: 10, fontWeight: 'bold', marginLeft: '2%' }}>23/10/20 13:13</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        flexDirection: 'row'
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
    }
});

export default TopBarProfile;