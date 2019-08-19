import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Block, Toolbar } from "cidro";

const Profile = props => {
  return (
    <Block flex safe>
      <Toolbar
        left={
          <Icon
            name="back"
            size={20}
            onPress={() => props.navigation.goBack()}
          />
        }
      />
    </Block>
  );
};

Profile.navigationOptions = {
  header: null
};

export default Profile;
