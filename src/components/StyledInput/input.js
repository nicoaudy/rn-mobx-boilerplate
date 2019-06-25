import React from "react";

import { View, Text, TextInput } from "react-native";

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3 }}>{label}</Text>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        marginBottom: 3
      }}
      onChangeText={formikProps.handleChange(formikKey)}
      onBlur={formikProps.handleBlur(formikKey)}
      {...rest}
    />
    <Text style={{ color: "red" }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

export default StyledInput;
