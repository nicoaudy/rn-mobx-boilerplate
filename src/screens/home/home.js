import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Block, Toolbar, Text } from "cidro";

const Home = props => {
  return (
    <Block flex safe>
      <Toolbar
        left={<Text bold>My App</Text>}
        right={
          <Icon
            name="logout"
            size={18}
            onPress={() => props.authStore.logout()}
          />
        }
      />
      <Block flex center middle>
        <Text>Hi, Welcome back {props.authStore.user.name}</Text>
      </Block>
    </Block>
  );
};

Home.navigationOptions = {
  header: null
};

export default Home;
