import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  StopCircleIcon,
  StopIcon,
} from "react-native-heroicons/outline";
import { StopIcon as StopSolidIcon } from "react-native-heroicons/solid";

import { Input } from "../Input";
import { Button } from "../Button";
import { ValidationMessage } from "../ValidationMessage";

export function RegisterScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [competition, setCompetition] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [checkBox, setCheckBox] = useState(false);

  useLayoutEffect(() => {
    // Disable default header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (!params || !params.competition) return;

    setCompetition(params.competition);
  }, [params]);

  const validate = () => {
    let valid = true;
    let errors = {
      competition: "",
      email: "",
      confirmPassword: [
        {
          text: "At least 8 letters",
          status: true,
        },
        {
          text: "Include at least 3 uppercase letters, lowercase letters, number, or special letters",
          status: true,
        },
        {
          text: "Special letters are only limited to (~`!@#$%^&*()_-+=?)",
          // status: false,
        },
        {
          text: "New password and Confirm password do not match.",
          // status: false,
        },
      ],
    };

    if (!competition) {
      errors.competition = "You must pick a competition to register";
      valid = false;
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.email = "Email format is invalid";
      valid = false;
    }

    if (password.length < 8) {
      let updatedPasswordErrorMessage = errors.confirmPassword.map((error) => {
        if (error.text === "At least 8 letters") {
          error.status = false;
        }
        return error;
      });

      errors.confirmPassword = updatedPasswordErrorMessage;

      valid = false;
    }

    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+=?])/.test(password)
    ) {
      let updatedPasswordErrorMessage = errors.confirmPassword.map((error) => {
        if (
          error.text ===
          "Include at least 3 uppercase letters, lowercase letters, number, or special letters"
        ) {
          error.status = false;
        }
        return error;
      });

      errors.confirmPassword = updatedPasswordErrorMessage;

      valid = false;
    } else {
      let updatedPasswordErrorMessage = errors.confirmPassword.filter(
        (error) => {
          if (
            error.text !==
            "Special letters are only limited to (~`!@#$%^&*()_-+=?)"
          ) {
            return error;
          }
        }
      );

      errors.confirmPassword = updatedPasswordErrorMessage;
      valid = true;
    }

    if (password === confirmPassword) {
      let updatedPasswordErrorMessage = errors.confirmPassword.filter(
        (error) => {
          if (
            error.text !== "New password and Confirm password do not match."
          ) {
            return error;
          }
        }
      );

      errors.confirmPassword = updatedPasswordErrorMessage;
      valid = true;
    } else {
      valid = false;
    }

    if (!firstName) {
      errors.firstName = "This is a required field";
      valid = false;
    }

    if (!lastName) {
      errors.lastName = "This is a required field";
      valid = false;
    }

    if (!checkBox) {
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleCompetition = () => {
    navigation.navigate("Competition", {
      id: competition ? competition.id : null,
    });
  };

  const handleSignUp = () => {
    if (validate()) {
      // Handle sign up
      navigation.navigate("Dashboard");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.backIcon}>
            <ArrowLeftIcon color="#000" size={22} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Create Account</Text>
        </View>

        {/* FORM */}
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Button
            title={competition ? competition.title : "Competition to sign up *"}
            buttonStyle={styles.competitionButton}
            onPress={handleCompetition}
            textStyle={styles.competitionButtonText}
            endDecorator={ChevronDownIcon}
            endDecoratorColor="#475467"
          />

          {errors.competition && (
            <ValidationMessage message={errors.competition} />
          )}

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            errorMessage={errors.email}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            // errorMessage={errors.password}
            isPassword
            secureTextEntry
          />

          <Input
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            passwordErrorMessages={errors.confirmPassword}
            isPassword
            secureTextEntry
          />

          <Input
            label="First Name in English *"
            value={firstName}
            onChangeText={setFirstName}
            errorMessage={errors.firstName}
          />

          <Input
            label="Last Name in English *"
            value={lastName}
            onChangeText={setLastName}
            errorMessage={errors.lastName}
          />

          <TouchableOpacity
            onPress={() => {
              setCheckBox(!checkBox);
            }}
            style={styles.checkboxContainer}
          >
            {checkBox ? (
              <StopSolidIcon size={30} color="#2E5BFF" />
            ) : (
              <StopIcon size={30} color="#D3D8FF" />
            )}
            <View style={styles.checkboxTextContainer}>
              <Text style={styles.checkBoxText}>
                By signing up, I agree to Cloit's{" "}
                <Text style={styles.underlineText}>Terms & </Text>{" "}
              </Text>

              <Text style={styles.checkBoxText}>
                <Text style={styles.underlineText}>Conditions</Text> and{" "}
                <Text style={styles.underlineText}>Privacy Policy.</Text>
              </Text>
            </View>
          </TouchableOpacity>

          <Button
            title="Sign Up"
            buttonStyle={styles.signUpButton}
            onPress={handleSignUp}
            textStyle={styles.signUpButtonText}
            // endDecorator
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  screen: {
    margin: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  headerText: {
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 30,
  },

  backIcon: {
    padding: 12,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: 50,
  },

  formContainer: {
    gap: 5,
    marginVertical: 15,
  },

  competitionButton: {
    backgroundColor: "#F9FAFB",
    paddingVertical: 16,
    paddingStart: 15,
    paddingEnd: 16,
    // flexDirection: "none",
    borderRadius: 16,
  },

  competitionButtonText: {
    textAlign: "left",
    color: "#667085",
    fontWeight: "400",
    marginLeft: 0,
    fontSize: 16,
  },

  signUpButton: {
    backgroundColor: "#2E5BFF",
    paddingVertical: 15,
    flexDirection: "none",
  },

  signUpButtonText: {
    textAlign: "center",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "start",
    marginVertical: 20,
  },
  checkboxTextContainer: {
    marginLeft: 7,
    textAlign: "left",
    flexDirection: "column",
    gap: 5,
    // flexWrap: "wrap",
  },

  underlineText: {
    textDecorationLine: "underline",
  },

  checkBoxText: {
    color: "#475467",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
  },
});
