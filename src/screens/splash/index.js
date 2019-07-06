import {} from "mobx";
import splash from "./splash";
import { inject, observer } from "mobx-react";

export default inject("authStore")(observer(splash));
