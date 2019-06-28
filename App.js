import React, { Component } from "react";
import { Container, Content, Text, StyleProvider } from "native-base";

import Navigation from "./src/navigations";
import { Provider } from "mobx-react";

import store from "./src/stores";

import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider {...store}>
          <Navigation />
        </Provider>
      </StyleProvider>
    );
  }
}
