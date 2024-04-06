import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import Header from "../components/header";
import SubmitButton from "../components/submissionButton";

import { useNavigation } from '@react-navigation/native';

export default function Landing() {

  const navigation = useNavigation();

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
      marginTop: 50,
      bottom: 50,
      right: 15,
    },
});