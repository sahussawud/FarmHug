
import React from 'react'
import {Alert} from 'react-native'
export const registerPath = 'https://farm-hug-api.herokuapp.com/user/signup';

export const signinPath = 'https://farm-hug-api.herokuapp.com/user/login';

export const createAlert = (title, msg) =>
Alert.alert(
    title,
    msg,
    [
        { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
);