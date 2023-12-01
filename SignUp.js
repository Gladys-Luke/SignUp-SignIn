// SignUp.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
} from "react-native";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import signupValidationSchema from "./signupValidationSchema";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLoginPress = () => {
    // Handle sign-up logic here
    console.log("Login button pressed!");
    // Navigate to another screen
    navigation.navigate("Home"); // Replace "Home" with the name of your home screen
  };
  const handleSignUpPress = () => {
    // Handle sign-up logic here
    console.log("Sign Up button pressed!");
    // Navigate to another screen
    navigation.navigate("Home"); // Replace "Home" with the name of your home screen
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSignUpPress}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
           <>
              <View style={styles.container}>
                <Text style={styles.text}>Create your account</Text>

                <View tyle={styles.fbContainer}>
                <Icon.Button
                 name="facebook"
                 backgroundColor="#7583CA"
                 style={{ paddingVertical: 15, paddingHorizontal: 20, width: 270 }} // Adjust values as needed
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
                 style={{ paddingVertical: 15, paddingHorizontal: 20, width: 270 }} // Adjust values as needed
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
                 placeholder="Name"
                 onChangeText={handleChange("name")}
                 onBlur={handleBlur("name")}
                 value={values.name}
                 autoCapitalize="none"
                />
                <Text style={styles.errorText}>{errors.name}</Text>
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
                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                  <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
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
    color: "#3F414E",
    fontWeight: "600",
    marginBottom: 10,
  },
  logText: {
    color: "#A1A4B2",
    marginVertical: 30,
  },

  gContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 55,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    borderColor: "#EBEAEC",
    borderWidth: 1,
  },
  fbText: {
    color: "white",
    fontSize: 14,
  },
  gText: {
    color: "#3F414E",
    fontSize: 14,
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
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  login: {
    color: "#8E97FD",
  },
  policy: {
    color: "#A1A4B2",
    fontSize: 14,
  },
  policyCon: {
    marginVertical: 20,
  },
  errorText: {
    color: "red",
    textAlign: "left",
    width: 300,
  },
});

export default SignUp;
