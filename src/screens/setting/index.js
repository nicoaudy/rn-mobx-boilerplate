import React, { Component } from "react";

import { Container, Content, Button, Text } from "native-base";

import Header from "components/Header";

export default class Setting extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header title="Settings" />

        <Content style={{ padding: 10 }}>
          <Button
            bordered
            onPress={() => this.props.navigation.navigate("PROFILE")}
          >
            <Text>Go to profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
