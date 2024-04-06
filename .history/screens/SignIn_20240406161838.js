// SignIn.js
import React from "react";
import { useForm } from "react-hook-form";

import { Text, View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import StickyButton from "../components/submissionButton";

import { AntDesign } from "@expo/vector-icons";

import config from "../config";

export default function SignIn() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch(`${config.apiEndpoint}/users/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const responseData = await response.json();
      console.log("Authentication successful:", responseData);

      // Navigate to the next screen or show success message
      navigation.navigate("Main");
    } catch (error) {
      console.error("Error during sign-in:", error);
      Alert.alert("Error", "Failed to sign in. Please check your credentials."); // Display a simple alert in case of an error
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <AntDesign
          name="close"
          size={25}
          color="grey"
          style={styles.iconButton}
          onPress={() => navigation.navigate("Landing")}
        />
        <Text style={styles.header}>Sign in</Text>

        <EmailInput control={control} name="email" title="Email" />
        <PasswordInput
          control={control}
          name="password"
          title="Password"
          mainIcon="visibility-off"
          secondaryIcon="visibility"
        />
      </View>
      <View style={styles.buttonContainer}>
        <StickyButton
          title={"Sign in"}
          functionHandler={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 75,
    padding: 20,
  },
  inputContainer: {
    padding: 25,
    marginTop: 100,
  },
  inputLine: {},
  forgettableContainer: {
    padding: 25,
    paddingTop: 30,

    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 200,
    height: 120,
  },
  forgettableLines: {
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    right: 15,
  },
});
