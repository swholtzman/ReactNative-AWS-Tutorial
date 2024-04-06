import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Header from "../components/header";
import SubmitButton from "../components/submissionButton";

export default function Landing() {
  return (
    <View>
      <View>
          <Header style={styles.header}></Header>
        <Text>Landing Page</Text>
      </View>

      <View>
        <SubmitButton style={styles.buttonContainer}>

        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        color: "blue",
    },
    buttonContainer: {

    }
});