import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerNav}>Header Page Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
  },
  headerNav: {
      color: "white",
  }
});