import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import Loginpage from "./pages/Loginpage";
import store from "./redux/store";
import Mainscreen from "./pages/Mainscreen";

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Loginpage /> */}
        <Mainscreen/>
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
