import { StyleSheet } from "react-native";
import theme from "utils/theme";

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  text: {
    marginTop: 10,
    width: 250,
    fontSize: 20,
    textAlign: "center",
    opacity: 0.9
  },
  logo: {
    width: 100,
    height: 100
  },
  container: {
    flex: 1,
    backgroundColor: theme.color.COLOR_WHITE,
    padding: 8
  }
});

export default styles;
