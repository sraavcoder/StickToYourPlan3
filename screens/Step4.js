import React from 'react';
import { StyleSheet, Text, View, ListItem, TouchableOpacity, FlatList } from 'react-native';

import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";

export default class Step4 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <MyHeader title="Stick To Your Plan" />

                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20 }}>Follow the Instructions to complete Step 4</Text>
                </View>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#00adb5', width: '50%', height: RFValue(25), marginTop: 30 }]}
                    onPress={() => { this.props.navigation.navigate("Go") }}
                >
                    <Text style={[styles.buttonText, { fontSize: RFValue(10) }]} >Save And Complete Your TimeTable</Text>
                </TouchableOpacity>


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
    button: {
        width: '85%',
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(25),
        backgroundColor: '#f47b9d',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        marginBottom: RFValue(10),
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        alignSelf: 'center'
    },

    buttonText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: RFValue(20),
    },
})

