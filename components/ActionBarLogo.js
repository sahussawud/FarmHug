import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import logo from "../assets/logo.png"

const ActionBarImage=(props)=> {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={logo}
          style={{
            width: 60,
            height: 60,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
}

export default ActionBarImage;