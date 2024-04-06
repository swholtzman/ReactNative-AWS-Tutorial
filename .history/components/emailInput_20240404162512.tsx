// EmailInput.js
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Controller } from "react-hook-form"; // Import Controller from 'react-hook-form'

export default function EmailInput({ control, name, title }) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={title}
              placeholderTextColor="black"
            />
            <View style={styles.underline} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  inputContainer: {
    flex: 1,
    paddingRight: 35,
  },
  input: {
    fontSize: 15,
    paddingVertical: 0,
  },
  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -10,
    height: 1,
    backgroundColor: "hsla(0, 0%, 50%, 0.2)",
  },
});
