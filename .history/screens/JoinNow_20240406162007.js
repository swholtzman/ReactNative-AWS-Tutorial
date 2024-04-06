// JoinNow.js

import React, { useState } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import Button from "../components/submissionButton";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";


import config from "../config";

export default function JoinNow() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();


  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch(`${config.apiEndpoint}/users/create`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed in JoinNow.java file');
      }

      const responseData = await response.json();
      console.log("User created successfully:", responseData);

      // Navigate to main page or show success message
      navigation.navigate('Main');
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error (show error message)
    }
  };

  return (
  <View style={styles.background}>
    <ScrollView>
      <View style={styles.container}>
        <AntDesign
          name="close"
          size={25}
          color="grey"
          style={styles.iconButton}
          onPress={() => navigation.navigate("Landing")}
        />
        <Text style={styles.header}>Sign up</Text>

        {/* SECURITY SECTION BEGINS */}
        <View style={styles.inputContainer}>
          <EmailInput control={control} name="email" title="Email" />
          <PasswordInput
            control={control}
            name="password"
            title="Password"
            mainIcon={"visibility-off"}
            secondaryIcon={"visibility"}
          />
        </View>

        {/* SECURITY SECTION ENDS */}


        {/* GREEN SUBMISSION BUTTON BEGINS */}
        <View style={styles.greenButtonContainer}>
          <Button
            title="Create Account"
            functionHandler={handleSubmit(onSubmit)}
          />
        </View>
        {/* GREEN SUBMISSION BUTTON ENDS */}

        {/* TERMS SECTION ENDS */}
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    height: "100%",
    marginTop: 75,
    padding: 20,
  },
  headerContainer: {
    width: "100%",
    paddingBottom: 10,

    borderBottomColor: "hsla(0, 0%, 50%, 0.5)",
    borderBottomWidth: 1.5,
  },
  iconButton: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    paddingBottom: 10,
  },
  inputLine: {
    paddingVertical: 10,
    paddingBottom: 15,
  },
  greenButtonContainer: {
    position: "absolute",
    bottom: 100,
    width: 200,
    right: 20,
  },
  greenButton: {},
});
