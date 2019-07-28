import React from "react";
import { View, Text } from "react-native";

const Setting = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Setting screen</Text>
    </View>
  );
};

Setting.navigationOptions = {
  title: "Setting"
};

export default Setting;
