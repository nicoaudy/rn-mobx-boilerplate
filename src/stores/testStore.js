import { decorate, observable, action } from "mobx";

import remotedev from "mobx-remotedev";
import { NavigationService } from "../services/NavigationService";

class TestStore {
  message = "Hello World";

  init() {
    NavigationService.navigate("LOGIN");
  }
}

decorate(TestStore, {
  message: observable,
  init: action
});

export default remotedev((TestStore = new TestStore()), { remote: true });
