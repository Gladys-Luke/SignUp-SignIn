import React from "react";
import { StyleSheet, ImageBackground, Image, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./SignUp";
import Login from "./Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    // Navigate to the SignUp screen
    navigation.navigate("SignUp");
  };
  const handleLoginPress = () => {
    // Navigate to the Login screen
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("./assets/bgColor.png")}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Silent</Text>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <Text style={styles.text}>Moon</Text>
        </View>
        <Image style={styles.tinyLogo} source={require("./assets/Group.png")} />
      </ImageBackground>

      <View>
        <Text>We are what we do</Text>
        <Text>Thousands of people are using Silent Moon for small meditations</Text>

        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text>
        ALREADY HAVE AN ACCOUNT? 
        </Text>
        <Text style={styles.login} onPress={handleLoginPress}> LOG IN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 24,
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#8E97FD",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
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
