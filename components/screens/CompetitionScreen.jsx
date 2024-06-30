import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { CompetitionItem } from "../CompetitionItem";
import { competitions } from "../../dummyData";

export const CompetitionScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    params: { id },
  } = useRoute();
  const navigate = useNavigation();

  useLayoutEffect(() => {
    // Disable default header
    navigate.setOptions({
      headerShown: false,
    });
  }, []);

  const goBack = (selected) => {
    navigate.navigate("SignUp", { competition: selected });
  };

  const handleSearch = (text) => {
    setSearchQuery(text); // Update the search query state
  };

  const filteredCompetitions = competitions.filter((competition) => {
    const title = competition.title.toLowerCase();
    const location = competition.location.toLowerCase();
    const search = searchQuery.toLowerCase();
    return title.includes(search) || location.includes(search);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigate.goBack()}
          >
            <ArrowLeftIcon size={22} color="#000" />
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Asian"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <View style={styles.searchIcon}>
              <MagnifyingGlassIcon size={22} color="#000" />
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.title}>Competition</Text>
            <Text style={styles.description}>
              An account is needed per one host. If you already have an account
              for the host of competition you want to sign up, you can login and
              register.
            </Text>
            {filteredCompetitions.map((competition) => (
              <CompetitionItem
                key={competition.id}
                title={competition.title}
                location={competition.location}
                date={competition.date}
                selected={id ? competition.id === id : false}
                onPress={() => goBack(competition)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  screen: {
    margin: 20,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  backIcon: {
    padding: 12,
    borderColor: "#D0D5DD",
    backgroundColor: "#F9FAFB",

    borderWidth: 1,
    borderRadius: 50,
  },

  description: {
    fontSize: 14,
    marginBottom: 16,
    color: "#344054",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
    gap: 12,
  },

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    flex: 1,
    padding: 16,
    borderRadius: 16,
    justifyContent: "space-between",
  },

  searchInput: {
    marginHorizontal: 8,
    fontSize: 16,
    borderRadius: 4,
  },

  searchIcon: {
    // flex: 1,
    marginLeft: 5,
  },
});
