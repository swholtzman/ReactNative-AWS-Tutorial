// passwordInput.tsx
import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Controller } from "react-hook-form"; // Import Controller from 'react-hook-form'
import { MaterialIcons } from "@expo/vector-icons";

export default function PasswordInput({
  control, // This prop is passed from the parent form component
  name, // The name of the field
  title,
  mainIcon,
  secondaryIcon,
}) {
  const [icon, setIcon] = useState(mainIcon);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    setIcon(icon === mainIcon ? secondaryIcon : mainIcon);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={{
          required: 'Please create a password',
          minLength: {
            value: 10,
            message: 'Password must be at least 10 characters'
          },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/,
            message: 'Password must contain a number and a symbol'
          }
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
              secureTextEntry={secureTextEntry} // Controlled by state
            />
            <TouchableOpacity style={styles.icon} onPress={toggleSecureEntry}>
              <MaterialIcons name={icon} size={20} color="grey" />
            </TouchableOpacity>
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
  icon: {
    position: "absolute",
    right: 10,
    bottom: 0,
  },
});
