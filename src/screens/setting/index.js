import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Setting extends Component {
  static navigationOptions = {
    title: "Setting"
  };

  render() {
    return (
      <View>
        <Text> Setting Screen </Text>
      </View>
    );
  }
}
