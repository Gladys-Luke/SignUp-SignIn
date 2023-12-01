// SignUp.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import loginValidationSchema from "./loginValidationSchema";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    // Handle sign-up logic here
    console.log("Sign Up button pressed!");
    // Navigate to another screen
    navigation.navigate("Home"); // Replace "Home" with the name of your home screen
  };
  const handleSignUpPress = () => {
    // Handle sign-up logic here
    console.log("Sign Up button pressed!");
    // Navigate to another screen
    navigation.navigate("SignUp"); // Replace "Home" with the name of your home screen
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema} // Use the imported validation schema
        onSubmit={handleLoginPress}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View style={styles.container}>
              <Text style={styles.text}>Welcome Back!</Text>

              <View tyle={styles.fbContainer}>
                <Icon.Button
                  name="facebook"
                  backgroundColor="#7583CA"
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    width: 270,
                  }} // Adjust values as needed
                  onPress={this.loginWithFacebook}
                  borderRadius={50}
                >
                  <Text style={styles.fbText}>CONTINUE WITH FACEBOOK</Text>
                </Icon.Button>
              </View>
              <View style={styles.gContainer}>
                <Icon.Button
                  name="facebook"
                  backgroundColor="#7583CA"
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    width: 270,
                  }} // Adjust values as needed
                  onPress={this.loginWithFacebook}
                  borderRadius={50}
                >
                  <Text style={styles.gText}>CONTINUE WITH GOOGLE</Text>
                </Icon.Button>
              </View>

              <Text style={styles.logText}>OR LOG IN WITH EMAIL</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email Address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Text style={styles.errorText}>{errors.email}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                <Text style={styles.errorText}>{errors.password}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleLoginPress}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.subText}>Forgot Password?</Text>
                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>ALREADY HAVE AN ACCOUNT?</Text>
                  <Text style={styles.login} onPress={handleSignUpPress}>
                    {" "}
                    Sign Up
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 10,
  },
  fbContainer: {
    backgroundColor: "#7583CA",
    paddingHorizontal: 55,
    paddingVertical: 15,
    borderRadius: 25,
  },
  gContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 55,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  fbText: {
    color: "white",
  },
  gText: {
    color: "#3F414E",
  },
  logText: {
    color: "#A1A4B2",
    marginVertical: 30,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#F2F3F7",
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#8E97FD",
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  subText: {
    color: "#3F414E",
    textAlign: "center",
    fontWeight: "400",
    marginVertical: 10,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  loginText: {
    fontSize: 14,
    color: "#A1A4B2",
  },
  login: {
    fontSize: 14,
    color: "#8E97FD",
  },
  errorText: {
    color: "red",
    textAlign: "left",
    width: 300,
  },
});
export default Login;
