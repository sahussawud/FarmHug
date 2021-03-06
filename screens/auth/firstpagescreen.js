import React from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
    StatusBar,
    Linking
} from "react-native";
import logo from "../../assets/logo.png"
import theme from '../../themes/default'


const FirstPageScreen = (props) => {

    return (

        <View style={styles.screen}>
                        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
            <Image source={logo} style={styles.logo} />
            <Text style={{ fontSize: 45, fontWeight: 'bold', fontFamily: 'Kanit'}}>FarmHug</Text>
            <Text style={{ fontFamily: 'Kanit'}}>Grow farm with love</Text>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={ styles.button} onPress={()=>{
                    props.navigation.navigate("loginScreen")
                }}>
                    <Text style={{ ...theme.font, textAlign: 'center' }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={()=>{
                    props.navigation.navigate("registrarScreen")
                }}>
                    <Text style={{ ...theme.font, textAlign: 'center' }}>สมัครสมาชิก</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        fontFamily: theme.font.fontFamily,
        fontSize: theme.font.fontSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonArea:{
        marginTop: 20
    },
    button:{
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center'
    }
});

FirstPageScreen.navigationOptions = {
    //headerTitleStyle: { alignSelf: 'center' },
    //headerLeft: <ActionBarImage/>,
    headerStyle:{
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    }
};

export default FirstPageScreen;
