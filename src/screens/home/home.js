import React from "react";
import { View, Text } from "react-native";

const Home = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hi, Welcome back {props.authStore.user.name}</Text>
    </View>
  );
};

Home.navigationOptions = {
  title: "HOME"
};

export default Home;
