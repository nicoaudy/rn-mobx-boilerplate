import React from "react";
import { Block, Toolbar, Text, AvatarText } from "cidro";

const Home = props => {
  return (
    <Block flex safe style={{ backgroundColor: "white" }}>
      <Toolbar
        right={<Text onPress={() => props.authStore.logout()}>Logout</Text>}
      />
      <Block flex center middle>
        <Text>Hi, Welcome back {props.authStore.user.name}</Text>
        <AvatarText
          circle
          backgroundColor="papayawhip"
          textColor="palevioletred"
          title={(props.authStore && props.authStore.user.name) || "NA"}
        />
      </Block>
    </Block>
  );
};

Home.navigationOptions = {
  header: null
};

export default Home;
