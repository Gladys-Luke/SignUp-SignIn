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
import Icon from "react-native-vector-icons/FontAwesome";

const Login = ({ navigation }) => {
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
    console.log("Login button pressed!");
    // Navigate to another screen
    navigation.navigate("Home"); // Replace "Home" with the name of your home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create your account</Text>

      <View tyle={styles.fbContainer}>
        <Icon.Button
          name="facebook"
          backgroundColor="#7583CA"
          style={{ paddingVertical: 15, paddingHorizontal: 20, width: 270,}} // Adjust values as needed
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
          style={{ paddingVertical: 15, paddingHorizontal: 20, width: 270,}} // Adjust values as needed
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
          onChangeText={(text) => setName(text)}
          value={name}
          autoCapitalize="none"
        />
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

        <View style={styles.policyCon}>
        <Text style={styles.policy}>i have read the Privace Policy</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
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
    fontSize: 14
  },
  policyCon: {
    marginVertical: 20
  }
});

export default Login;
