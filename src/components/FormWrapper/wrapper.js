import React from "react";

import { View, Text } from "react-native";
import theme from "utils/theme";
import styles from "./styles";

const FormWrapper = ({ label, formikProps, formikKey, children }) => {
  const inputStyle = {
    borderBottomColor: theme.color.COLOR_PRIMARY
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyle.borderBottomColor = theme.color.COLOR_DANGER;
  }

  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>

      {children}

      <Text style={{ color: theme.color.COLOR_DANGER }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
  );
};

export default FormWrapper;
