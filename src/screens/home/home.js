import React, { Component } from "react";

import Header from "components/Header";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <Header title={this.props.testStore.message} />
      </>
    );
  }
}
