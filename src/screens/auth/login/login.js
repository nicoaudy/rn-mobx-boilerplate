import React from "react";
import { Block, Form, TextInput, Button } from "cidro";

import { Formik } from "formik";
import * as yup from "yup";

const Login = props => {
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
    <Block flex safe>
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));

          setTimeout(() => {
            actions.setSubmitting(true);
            props.authStore.login(values.email, values.password);
            actions.setSubmitting(false);
          }, 2000);
        }}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form
            title="Your App"
            subtitle="Please inform your email and password to logged in"
          >
            <TextInput
              label="Email"
              value={formik.values["email"]}
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              type={
                formik.touched["email"] && formik.errors["email"]
                  ? "error"
                  : "success"
              }
              message={formik.touched["email"] && formik.errors["email"]}
              placeholder="Email address"
              keyboardType="email-address"
            />

            <TextInput
              label="Password"
              value={formik.values["password"]}
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              type={
                formik.touched["password"] && formik.errors["password"]
                  ? "error"
                  : "success"
              }
              message={formik.touched["password"] && formik.errors["password"]}
              placeholder="Password"
              secureTextEntry
            />

            <Button
              text="LOGIN"
              size={10}
              type="primary"
              onPress={formik.handleSubmit}
              loading={formik.isSubmitting ? true : false}
              disabled={formik.isSubmitting ? true : false}
            />
          </Form>
        )}
      </Formik>
    </Block>
  );
};

export default Login;
