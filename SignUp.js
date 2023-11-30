// SignUp.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const SignUp = ({ navigation }) => {
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
    navigation.navigate("Login"); // Replace "Home" with the name of your home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back!</Text>

      <View style={styles.fbContainer}>
        <Text style={styles.fbText}>CONTINUE WITH FACEBOOK</Text>
      </View>
      <View style={styles.gContainer}>
        <Text style={styles.gText}>CONTINUE WITH GOOGLE</Text>
      </View>

      <View>
        <Text>OR LOG IN WITH EMAIL</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text>Forgot Password?</Text>
        <View style={styles.loginContainer}>
        <Text>
        ALREADY HAVE AN ACCOUNT? 
        </Text>
        <Text style={styles.login} onPress={handleSignUpPress}> Sign Up</Text>
      </View>
      </View>


    </View>
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
    borderColor: 'gray',
    borderWidth: 1,
  },
  fbText: {
    color: "white",
  },
  gText: {
    color: "#3F414E",
  },
  inputContainer: {
    flex: 0.5,
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
});

export default SignUp;
