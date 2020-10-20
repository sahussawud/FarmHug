import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';

const statusHeight = (Platform.OS === 'ios' ? Constants.statusBarHeight : 0);
        
const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight
    },
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top: statusHeight + 20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'black',
    },

});

export default class Status extends React.Component {
    state = {
        isConnected: null,
    };


    async componentDidMount() {
        this.subscription = NetInfo.addEventListener(this.handleChange);
        const { isConnected } = await NetInfo.fetch();
        this.setState({ isConnected });
    }
    componentWillUnmount() {
        this.subscription()
    }
    handleChange = ({ isConnected }) => {
        this.setState({ isConnected });
    };
    // ...
    render() {
        const { isConnected } = this.state;
        const backgroundColor = isConnected ? 'white' : 'red';
        const messageContainer = (
            <View pointerEvents={'none'}>
                <StatusBar/>
                {!isConnected && (
                    <View style={styles.bubble}>
                        <Text style={styles.text}>No network connection</Text>
                    </View>
                )}
                {this.props.children}
            </View>
        );
        if (Platform.OS ===
            'ios') {
            return (
                <View style={[styles.status, { backgroundColor }]}>
                    {messageContainer}
                </View>
            );
        }
        return messageContainer;
    }
}
