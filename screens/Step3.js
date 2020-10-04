import React from 'react';
import { StyleSheet, Text, View, ListItem, TouchableOpacity, FlatList } from 'react-native';

import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";

export default class Step3 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <MyHeader title="Stick To Your Plan" />

                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20 }}>Follow the Instructions to complete Step 3</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

