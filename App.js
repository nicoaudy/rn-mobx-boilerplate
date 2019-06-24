import React, { Component } from "react";

import Navigation from "./src/navigations";
import { Provider } from "mobx-react";

import store from "./src/stores";

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Navigation />
      </Provider>
    );
  }
}
