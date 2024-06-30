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
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const COLORS = ["#b58df1", "#fa7f7c", "#ffe780", "#82cab2"];

interface Props {
  ingredient: {
    name: string;
    id: string;
  };
  i: number;
  onDrop: (ingredient_id: string) => void;
}

export default function Ingredient({ ingredient, i, onDrop }: Props) {
  const pressed = useSharedValue<boolean>(false);

  const offsetX = useSharedValue<number>(0);
  const offsetY = useSharedValue<number>(0);
  const absoluteY = useSharedValue<number>(0);

  const isOverDropzone = useSharedValue<boolean>(false);

  const pan = Gesture.Pan()
    // .activeOffsetX(99999)
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
      absoluteY.value = event.absoluteY;
      isOverDropzone.value = event.absoluteY < 350;
      //   offset.value = event.translationX;
      console.log({
        //   offsetX: event.translationX,
        //   offsetY: event.translationY,
        //   event,
        aY: event.absoluteY,
      });
    })
    .onFinalize(() => {
      if (isOverDropzone.value) {
        console.log("Dropped");
        // pressed.value = false;

        // return;
        onDrop(ingredient.id);
      }
      //   offset.value = withSpring(0);
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
      pressed.value = false;
      isOverDropzone.value = false;
    })
    .runOnJS(true);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      //   { translateX: offset.value },
      //   { translateY: offset.value },
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: isOverDropzone.value
      ? "#e06523"
      : pressed.value
      ? "#7646be"
      : "#9564dd",
  }));
  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          {
            zIndex: 99,
            width: 90,
            height: 60,
            margin: 2,
            borderRadius: 10,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            minWidth: 90,
          },
          animatedStyles,
        ]}
      >
        <Text style={{ color: "white", fontWeight: 700, textAlign: "center" }}>
          {ingredient.name}
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}
