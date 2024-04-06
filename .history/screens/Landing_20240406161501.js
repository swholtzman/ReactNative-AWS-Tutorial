import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Header from "../components/header";
import SubmitButton from "../components/submissionButton";

export default function Landing() {
  return (
    <View>
      <View>
        <Header />
      </View>

      <View>
        <SubmitButton style={styles.buttonContainer}
          title={"Join now"}
          functionHandler={() => navigation.push('JoinNow')} 
        >

        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      position: "absolute",
      bottom: 50,
      right: 15,
    },
});