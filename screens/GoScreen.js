import React from 'react';
import { StyleSheet, Text, View, ListItem, TouchableOpacity, FlatList } from 'react-native';

import MyHeader from '../components/MyHeader';

export default class Go extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <MyHeader title="Congratulations Buddy" />

                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20 }}>Congratulations you have made your TimeTable</Text>
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

