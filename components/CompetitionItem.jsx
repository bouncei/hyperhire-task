import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const CompetitionItem = ({
  title,
  location,
  date,
  onPress,
  selected,
}) => {
  const handlePress = () => {
    onPress?.(title);
  };

  return (
    <TouchableOpacity
      style={[styles.itemContainer, selected && styles.selectedItem]}
      onPress={handlePress}
    >
      <ImageBackground source={require("../assets/images/card.png")}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>{location}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#253BFF",
    padding: 24,
    paddingBottom: 12,
    borderRadius: 16,
    marginBottom: 16,
  },
  selectedItem: {
    backgroundColor: "#4C53FF",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    color: "#FFFFFF",
    fontSize: 14,
    marginVertical: 4,
    fontWeight: "500",
  },
  location: {
    color: "#B8BFFF",
    fontSize: 14,
    fontWeight: "500",
  },
});
