/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
//import HTMLView from "react-native-htmlview";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    isLoading: true,
    loadHtml: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            flex: 1
          }}
        >
          <Text style={styles.welcome}>React Native App!</Text>
          <Text>
            {this.state.loadHtml !== ""
              ? "Web Message : " + this.state.loadHtml
              : "..."}
          </Text>
          <WebView
            source={{ uri: "http://showcase.showkhun.com/demohtml/" }}
            style={{ flex: 1 }}
            onMessage={event => {
              alert(event.nativeEvent.data);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
