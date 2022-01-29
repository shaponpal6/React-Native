import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashWrapper}>
      <Image style={styles.icon} source={require("../../assets/logo.png")} />
      <Text style={styles.text}>Self Improvement</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE2472",
  },
  icon: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 52,
    lineHeight: 61,
    letterSpacing: 0.34375,
    color: "#FFFFFF",
  },
});

export default SplashScreen;
