import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import ingredients from "@/data/recipes/fried_rice/ingredients.json";
import steps from "@/data/recipes/fried_rice/steps.json";
import { useState } from "react";

import imageMap from "./images";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Ingredient from "./Ingredient";
import StoveRotator from "./StoveRotator";
import Toast from "react-native-toast-message";

interface Props {
  label: string;
  onMixed: () => void;
}

const COLORS = ["#b58df1", "#fa7f7c", "#ffe780", "#82cab2"];

function MixButton({ label, onMixed }: Props) {
  const colorIndex = useSharedValue(0);
  const scale = useSharedValue(1);
  const mixTap = Gesture.LongPress()
    .minDuration(700)
    .onBegin(() => {
      scale.value = withTiming(1.2, {
        duration: 300,
        easing: Easing.bezier(0.31, 0.04, 0.03, 1.04),
      });
    })
    .onStart(() => {
      colorIndex.value = withTiming(
        (colorIndex.value + 1) % (COLORS.length + 1),
        { duration: 1000 },
        () => {
          if (colorIndex.value === COLORS.length) {
            colorIndex.value = 0;
          }
        }
      );
    })
    .onFinalize(() => {
      scale.value = withTiming(1, {
        duration: 250,
        easing: Easing.bezier(0.82, 0.06, 0.42, 1.01),
      });
    })
    .onEnd(() => {
      onMixed();
    })
    .runOnJS(true);

  const mixAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      colorIndex.value,
      [...COLORS.map((_, i) => i), COLORS.length],
      [...COLORS, COLORS[0]]
    ),
    transform: [{ scale: scale.value }],
  }));
  return (
    <GestureDetector gesture={mixTap}>
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          bottom: 8,
          position: "absolute",
          width: "100%",
        }}
      >
        <Animated.View
          // title={step.step_detailed_description}
          style={[
            {
              width: 200,
              height: "auto",
              // backgroundColor: "#1825dc",
              margin: 10,
              borderRadius: 10,
              padding: 10,
              borderColor: "white",
              borderWidth: 3,
            },

            mixAnimatedStyles,
          ]}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 700,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {label}
          </Text>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

export default MixButton;
