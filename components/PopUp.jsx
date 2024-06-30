import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "./Button";
import { XMarkIcon } from "react-native-heroicons/outline";

export const Popup = ({ visible, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <View style={styles.header}>
            <View style={styles.icon}>
              <Image
                source={require("../assets/images/star.png")}
                style={styles.iconImage}
              />
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <XMarkIcon color="#000" size={22} />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>Welcome to Soo</Text>
            <Text style={styles.message}>Great to have you with us!</Text>
          </View>
          <Button
            title="Got it"
            buttonStyle={styles.button}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  popup: {
    width: 343,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    // alignItems: "center",
  },
  button: {
    backgroundColor: "#2E5BFF",
    paddingVertical: 15,
    flexDirection: "none",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  body: {
    marginVertical: 40,
  },

  closeButton: {
    padding: 12,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: 50,
  },

  icon: {
    backgroundColor: "#0044FF",
    borderRadius: 50,
    padding: 12,
  },

  iconImage: {
    width: 24,
    height: 24,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#101828",

    fontWeight: "400",
  },
});
