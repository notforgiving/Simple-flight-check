import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import store from "./redux/store";
import Switch from "./Switch";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Switch/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
