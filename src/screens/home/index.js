import { inject, observer } from "mobx-react";
import Home from "./home";

export default inject("testStore", "authStore")(observer(Home));
