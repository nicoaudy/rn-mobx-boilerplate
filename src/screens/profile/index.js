import React, { Component } from "react";

import Header from "components/Header";

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <Header
          title="Profile"
          backBotton={true}
          backAction={() => this.props.navigation.goBack()}
        />
      </>
    );
  }
}
