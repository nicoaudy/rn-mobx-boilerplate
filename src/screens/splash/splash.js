import React, { Component } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 1500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 1000
    }).start();

    setTimeout(() => {
      this.props.testStore.init();
    }, 5000);
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={require("assets/logo.png")}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD"
  },
  ring: {
    backgroundColor: "#40C4FF",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});
