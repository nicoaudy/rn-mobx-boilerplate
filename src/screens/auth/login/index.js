import Login from "./login";
import { inject, observer } from "mobx-react";

export default inject("authStore")(observer(Login));
