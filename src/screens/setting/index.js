import React from "react";
import { Block, Toolbar, Text, Button } from "cidro";

const Setting = props => {
  return (
    <Block flex safe>
      <Toolbar left={<Text bold>Setting</Text>} />

      <Block style={{ marginTop: 40, padding: 20 }}>
        <Button
          text="Profile Screen"
          onPress={() => props.navigation.navigate("PROFILE")}
        />
      </Block>
    </Block>
  );
};

Setting.navigationOptions = {
  header: null
};

export default Setting;
