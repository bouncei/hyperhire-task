import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Popup } from "../PopUp";
import { useNavigation } from "@react-navigation/native";

export const DashboardScreen = () => {
  const navigation = useNavigation();

  const [popupVisible, setPopupVisible] = useState(true);

  useLayoutEffect(() => {
    // Disable default header
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Popup
        visible={popupVisible}
        onClose={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
});
