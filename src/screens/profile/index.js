import React, { Component } from "react";
import { Alert } from "react-native";

import Toolbar from "components/Toolbar";

export default class Profile extends Component {
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
        { text: "OK", onPress: () => this.props.navigation.navigate("LOGIN") }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <>
        <Toolbar
          title="Profile"
          backBotton={true}
          backAction={() => this.props.navigation.goBack()}
          rightBotton={true}
          rightAction={() => this._logout()}
          rightLabel="Logout"
        />
      </>
    );
  }
}