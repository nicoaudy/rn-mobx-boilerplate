import { decorate, observable } from "mobx";

import remotedev from "mobx-remotedev";

class TestStore {
  message = "Welcome from Mobx";
}

decorate(TestStore, {
  message: observable
});

export default remotedev((TestStore = new TestStore()), { remote: true });
