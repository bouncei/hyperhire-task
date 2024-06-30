import { Text, StyleSheet } from "react-native";

export const ValidationMessage = ({ message }) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginVertical: 5,
  },
});
