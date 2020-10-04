import React from 'react';
import { StyleSheet, Text, View, ListItem, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';



export default class Step2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            habitName: this.props.navigation.getParam("details")["habitName"],
            startHours: this.props.navigation.getParam("details")["startHours"],
            startMinutes: this.props.navigation.getParam("details")["startMinutes"],
            endHours: this.props.navigation.getParam("details")["endHours"],
            endMinutes: this.props.navigation.getParam("details")["endMinutes"],
            switch1Value: this.props.navigation.getParam("details")["switch1Value"],
            startDate: this.props.navigation.getParam("details")["startDate"],
            endDate: this.props.navigation.getParam("details")["endDate"],
        }
    }

    render() {
        return (
            <View style={styles.container} >

                <Card
                    title={"Details Of Your Task"}
                    titleStyle={{ fontSize: 20, }}
                >
                    <Card>
                        <Text style={{ fontWeight: 'bold' }}>Habit Name : {this.state.habitName}</Text>
                    </Card>
                    <Card>
                        <Text style={{ fontWeight: 'bold' }}>Start Time: {this.state.startHours} Hr and {this.state.startMinutes} Min</Text>
                    </Card>
                    <Card>
                        <Text style={{ fontWeight: 'bold' }}>End Time: {this.state.endHours} Hr and {this.state.endMinutes} Min</Text>
                    </Card>
                    <Card>
                        <Text style={{ fontWeight: 'bold' }}>Reccur the Task Everyday? : {this.state.switch1Value ? 'Yes' : 'No'}</Text>
                    </Card>

                </Card>

                <View>
                    <TouchableOpacity style={styles.modalButton} onPress={() => {
                        this.props.navigation.navigate("AppTabNavigator")
                    }} >
                        <Text style={{ color: 'white', fontSize: 15 }} >Send it to Monitoring Person and Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, },
    modalButton: {
        width: 400,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#00adb5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        alignSelf: 'center',
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20,
        marginBottom: 30,
    },
})

