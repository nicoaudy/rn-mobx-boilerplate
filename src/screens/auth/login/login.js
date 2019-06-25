import React, { Component, Fragment } from "react";
import { View, ActivityIndicator, Button } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import StyledInput from "components/StyledInput";

export default class Login extends Component {
  render() {
    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .required()
        .email()
        .label("Email"),
      password: yup
        .string()
        .required()
        .min(6)
        .label("Password")
    });

    return (
      <View>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values));
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}
        >
          {formik => (
            <Fragment>
              <StyledInput
                label="Email"
                formikProps={formik}
                formikKey="email"
                placeholder="John@doe.com"
                autofocus
              />

              <StyledInput
                label="Password"
                formikProps={formik}
                formikKey="password"
                placeholder="password"
                secureTextEntry
              />

              {formik.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Button
                  title="Submit"
                  onPress={formik.handleSubmit}
                  style={{ padding: 20 }}
                />
              )}
            </Fragment>
          )}
        </Formik>
      </View>
    );
  }
}
