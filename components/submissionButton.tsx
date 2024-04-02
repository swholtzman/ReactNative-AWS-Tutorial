import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

export default function GreenButton({ title, functionHandler }) {
  return (
    <View>
      <Pressable
        onPress={functionHandler}
        style={({ pressed }) => [
          styles.stickyButton,
          pressed && styles.pressedButton,
        ]}>
        {({ pressed }) => (
          <Text style={styles.boldWhiteText}>
            {pressed ? 
              <Text style={styles.boldGreenText}>{title}</Text> : title}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    stickyButton: {
      justifyContent: 'center',
      alignItems: 'center',
  
      borderColor: "none",
      borderRadius: 30,
  
      paddingHorizontal: 27.5,
      paddingVertical: 20,
  
      backgroundColor: "hsl(142, 100%, 22.5%)",
  
      shadowColor: "hsla(0, 0%, 30%, 0.6)",
      shadowRadius: 10,
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 10 },
    },
    pressedButton: {
      justifyContent: 'center',
      alignItems: 'center',
  
      borderColor: "none",
      borderRadius: 30,
  
      paddingHorizontal: 25,
      paddingVertical: 20,
      right: "2%",
  
      backgroundColor: "hsl(142, 100%, 10%)",
  
      shadowColor: "hsla(0, 0%, 30%, 0.6)",
      shadowRadius: 10,
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 5 },
    },
    boldWhiteText: {
      fontWeight: "bold",
      color: "hsl(0, 0%, 100%)",
      fontSize: 17.5,
    },
    boldGreenText: {
      fontWeight: "bold",
      color: "hsl(142, 100%, 70%)",
      fontSize: 17.5,
    }
  });