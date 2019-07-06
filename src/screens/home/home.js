import React, { Component } from "react";

import { Alert, Text } from "react-native";
import Toolbar from "components/Toolbar";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  _logout = () => {
    Alert.alert(
      "Anda yakin untuk keluar ?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.authStore.logout() }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <>
        <Toolbar
          title={this.props.testStore.message}
          rightBotton={true}
          rightWithIcon={true}
          rightIcon="arrow-forward"
          rightAction={this._logout}
        />

        <Text>Hi, Welcome back {this.props.authStore.user.name}</Text>
      </>
    );
  }
}
