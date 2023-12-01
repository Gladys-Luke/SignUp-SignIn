import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import SignUp from "./signUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide the default header
        }}
      >
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
          <Image style={styles.logo} source={require("./assets/logo.jpg")} />
          <Text style={styles.text}>Moon</Text>
        </View>
        <Image style={styles.tinyLogo} source={require("./assets/Group.png")} />
      </ImageBackground>

      <View style={styles.section} >
        <View>
          <Text style={styles.header}>We are what we do</Text>
          <Text style={styles.headerText}>
            Thousands of people are using Silent Moon{"\n"} for small
            meditations
          </Text>
          

          <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text>ALREADY HAVE AN ACCOUNT?</Text>
          <Text style={styles.login} onPress={handleLoginPress}>
            {" "}
            LOG IN
          </Text>
        </View>
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
    flex: 0.6,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  section: {
    flex: 0.4,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    color: "#3F414E",
  },
  headerText: {
    textAlign: "center",
    color: "#A1A4B2",
    marginVertical: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50
  },
  text: {
    color: "#3F414E",
    fontSize: 16,
    letterSpacing: 3.84
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  tinyLogo: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#8E97FD",
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  login: {
    color: "#8E97FD",
  },
});
