import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import {
  ArrowRightEndOnRectangleIcon,
  EnvelopeIcon,
} from "react-native-heroicons/outline";

export function LandingScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // Disable default header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const navigateTodSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/home.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Soo</Text>
          <Text style={styles.title}>and Carrots</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Sign up for free"
            onPress={navigateTodSignUp}
            buttonStyle={styles.signUpButton}
            textStyle={styles.signUpButtonText}
            startDecorator={ArrowRightEndOnRectangleIcon}
            endDecorator="default"
          />
          <Button
            title="Continue with Email"
            onPress={() => {}}
            buttonStyle={styles.emailButton}
            textStyle={styles.emailButtonText}
            startDecorator={EnvelopeIcon}
            endDecorator="default"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    position: "absolute",
    top: "10%",
    left: "5%",
  },

  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "800",
    lineHeight: 45,
  },
  buttonContainer: {
    width: "80%",
    position: "absolute",
    bottom: 50,
  },
  signUpButton: {
    backgroundColor: "#2E5BFF",
    marginBottom: 15,
  },
  signUpButtonText: {
    color: "#fff",
  },
  emailButton: {
    backgroundColor: "#333",
  },
  emailButtonText: {
    color: "#fff",
  },
});
