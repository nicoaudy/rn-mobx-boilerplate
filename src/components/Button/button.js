import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ onPress, title, ...rest }) => (
  <TouchableOpacity onPress={onPress} style={styles.submitButton} {...rest}>
    <Text style={styles.submitText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
