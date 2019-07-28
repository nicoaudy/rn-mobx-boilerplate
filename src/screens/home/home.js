import React from "react";
import { View, Text, Button } from "react-native";

const Home = props => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hi, Welcome back {props.authStore.user.name}</Text>
      <Button onPress={() => props.authStore.logout()} title="Logout" />
    </View>
  );
};

Home.navigationOptions = {
  title: "HOME"
};

export default Home;
