import React, { Component } from 'react';
import { Header, Badge, Icon } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class MyHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      value: "",
      userID: firebase.auth().currentUser.email,
    }
  }

  getNumberOfUnreadNotifications() {
    db.collection('AllNotification').where('NotificationStatus', '==', "Unread").where("UserID", "==", this.state.userID)
      .onSnapshot((snapshot) => {
        var unreadNotifications = snapshot.docs.map((doc) => doc.data())
        this.setState({
          value: unreadNotifications.length
        })
      })
  }

  componentDidMount() {
    this.getNumberOfUnreadNotifications();
  }

  BellIconWithBadge = () => {
    return (
      <View>
        <Icon name='bell' type='font-awesome' color='#696969' size={25}
          onPress={() => this.props.navigation.navigate('NotificationScreen')} />
        <Badge
          value={this.state.value}
          containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
      </View>
    )
  }

  render() {
    return (
      <Header
        centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize: 20, fontWeight: "bold", } }}
        backgroundColor="#00adb5"
      />

    )
  }
};


