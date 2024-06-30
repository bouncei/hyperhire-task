import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/outline";

export const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  errorMessage,
  isPassword = false,
  keyboardType = "default",
  inputStyle = {},
  placeholderTextColor = "#667085",
  passwordErrorMessages = [],
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const validPasswordErrors = passwordErrorMessages.filter((t) => t.status);
  const invalidPasswordErrors = passwordErrorMessages.filter((t) => !t.status);

  const PasswordErrorInOrder = [
    ...validPasswordErrors,
    ...invalidPasswordErrors,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && isSecure}
          placeholder={label}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            {isSecure ? (
              <EyeSlashIcon size={22} color="#101828" />
            ) : (
              <EyeIcon size={22} color="#101828" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <Text style={[styles.errorContainer, styles.errorText]}>
          {errorMessage}
        </Text>
      )}
      {invalidPasswordErrors.length !== 0 &&
        PasswordErrorInOrder.map((error) => (
          <View key={error.text} style={styles.errorContainer}>
            {error.status && <CheckIcon size={20} style={styles.errorText} />}
            <Text style={styles.errorText}>{error.text}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#F9FAFB",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#101828",
  },
  errorContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 5,
  },
  errorText: {
    color: "red",
  },
});
