import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

export const Button = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  startDecorator: StartIcon,
  endDecorator: EndIcon,
  startDecoratorColor,
  endDecoratorColor,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {StartIcon && (
          <StartIcon size={22} color={startDecoratorColor || "#fff"} />
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>

      {EndIcon === "default" ? (
        <View style={styles.endDecoratorIcon}>
          <ArrowRightIcon color={endDecoratorColor || "#fff"} size={22} />
        </View>
      ) : !EndIcon ? null : (
        <EndIcon color={endDecoratorColor || "#fff"} size={20} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingStart: 15,
    paddingVertical: 5,
    paddingEnd: 5,
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
  },
  text: {
    fontSize: 14,
    marginLeft: 12,
    color: "#fff",
    fontWeight: "700",
  },
  endDecoratorIcon: {
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
});
