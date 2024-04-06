// SignIn.js
import React from "react";
import { useForm } from 'react-hook-form';

import { ScrollView, View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import StickyButton from "../components/submissionButton";

import config from "../config";

export default function SignIn() {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {
            const response = await fetch(`${config.apiEndpoint}/users/authenticate`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Authentication failed');
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
                    <EmailInput control={control} name="email" title="Email" />
                    <PasswordInput control={control} name="password" title="Password" mainIcon="visibility-off" secondaryIcon="visibility" />
                </View>
            <View style={styles.buttonContainer}>
                <StickyButton title={"Sign in"} functionHandler={handleSubmit(onSubmit)} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "hsl(0, 0%, 97.5%)",
      alignItems: "center",
    },
    inputContainer: {
      padding: 25,
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
  