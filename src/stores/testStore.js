import { decorate, observable, action } from "mobx";

import remotedev from "mobx-remotedev/lib/dev";
import { NavigationService } from "../services/NavigationService";

class TestStore {
  message = "Your App";

  init() {
    NavigationService.navigate("LOGIN");
  }
}

decorate(TestStore, {
  message: observable,
  init: action
});

export default remotedev((TestStore = new TestStore()), { global: true });
