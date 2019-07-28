import React, { Component } from "react";
import { Provider } from "mobx-react";

import Navigation from "./src/navigations";
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
