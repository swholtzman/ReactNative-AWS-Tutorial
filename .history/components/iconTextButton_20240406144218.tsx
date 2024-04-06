import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function Header({ title, simpleName, evilName, functionHandler }) {
    return (
      <View style={styles.container}>
  
        <TouchableOpacity onPress={functionHandler} style={styles.container}>
          <SimpleLineIcons name={simpleName} size={20} color='grey' style={styles.icon} />
          <EvilIcons name={evilName} size={35} color='grey' style={styles.icon} />
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
  
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "flex-start", 
        alignItems: "center", 
    
        width: 100,

        paddingVertical: 5,
        
      },
      icon: {
        paddingRight: 5,
      },
      text: {
        color: 'black',
        fontSize: 15,
      }
});