import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("LOGIN");
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}
