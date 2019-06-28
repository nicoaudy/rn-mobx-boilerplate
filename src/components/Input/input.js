import React from "react";

import { View, Text, TextInput } from "react-native";
import theme from "utils/theme";
import styles from "./styles";

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyle = {
    borderBottomColor: theme.color.COLOR_PRIMARY
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyle.borderBottomColor = theme.color.COLOR_DANGER;
  }

  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={label}
        placeholderTextColor={theme.color.COLOR_PLACEHOLDER}
        style={[styles.formInput, inputStyle]}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Text style={{ color: theme.color.COLOR_DANGER }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
  );
};

export default StyledInput;
