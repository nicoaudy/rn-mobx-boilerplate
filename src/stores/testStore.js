import { decorate, observable } from "mobx";

class TestStore {
  message = "Welcome from Mobx";
}

decorate(TestStore, {
  message: observable
});

export default new TestStore();
