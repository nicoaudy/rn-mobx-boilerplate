import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("HOME")}
          title="Go to home"
        />
      </View>
    );
  }
}
