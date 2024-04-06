import { StyleSheet, View, Text } from "react-native";
import React from "react";
import IconButton from "./iconTextButton";

import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* header starts */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My New Project</Text>
        
        <View style={styles.headerButtonContainer}>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              title="Sign in"
              simpleName="login"
              evilName={null}
              functionHandler={() => navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </View>
      {/* header ends */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // shadowRadius: 2,
    // shadowColor: "black",
    // shadowOpacity: 80,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    paddingTop: 85,
    borderBottomColor: "hsla(0, 0%, 50%, 0.5)",
    borderBottomWidth: 1.5,
  },
  headerText: {
    textAlign: "left",
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%", // Changed from "105%" to "100%"
    paddingTop: "7%",
    paddingLeft: 40,
  },
  profileButton: {
    marginRight: -20,
  },
});
