import { StyleSheet } from "react-native";

import theme from "utils/theme";

const styles = StyleSheet.create({
  submitButton: {
    width: "100%",
    padding: 15,
    borderRadius: 3,
    backgroundColor: theme.color.COLOR_PRIMARY,
    justifyContent: "center",
    alignItems: "center"
  },
  submitText: {
    color: theme.color.COLOR_WHITE,
    fontWeight: "500",
    fontSize: 18
  }
});

export default styles;
