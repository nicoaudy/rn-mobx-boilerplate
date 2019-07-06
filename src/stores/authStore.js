import AsyncStorage from "@react-native-community/async-storage";
import remotedev from "mobx-remotedev/lib/dev";

import { NavigationService } from "../services/NavigationService";
import { decorate, observable, action } from "mobx";

const TOKEN_KEY = "@boilerplate/token";

class AuthStore {
  token: "";
  user: {};

  setupAuth = async () => {
    await this.getAuthToken();
    await this.getUserInfo();
  };

  getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);

      if (token) {
        this.token = token;
      } else {
        NavigationService.navigate("LOGIN");
      }
    } catch (err) {
      console.log(err);
    }
  };

  saveToken = async token => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (err) {
      console.log(err);
    }
  };

  logout = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);

      this.token = "";
      this.user = {};

      NavigationService.navigate("LOGIN");
    } catch (err) {
      console.log(err);
    }
  };

  login = async (email, password) => {
    try {
      const generate_token = email + password;
      this.token = generate_token;

      await this.saveToken(generate_token);
      await this.getAuthToken();
      await this.getUserInfo(email);
    } catch (err) {
      alert("Whops. Email atau password salah");
    }
  };

  getUserInfo = async email => {
    try {
      if (this.token) {
        this.user = {
          name: "Customer 1",
          email
        };
        NavigationService.navigate("HOME");
      }
    } catch (err) {
      await this.logout();
    }
  };
}

decorate(AuthStore, {
  token: observable,
  user: observable,
  setupAuth: action,
  getAuthToken: action,
  saveToken: action,
  logout: action,
  login: action,
  getUserInfo: action
});

export default remotedev((AuthStore = new AuthStore()), { global: true });
