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
  stoveAngle: number;
  setStoveAngle: (angle: number) => void;
  onRotate: (new_setting: "low" | "medium" | "high" | "off") => void;
}

export default function StoveRotator({
  stoveAngle,
  setStoveAngle,
  onRotate,
}: Props) {
  const angle = useSharedValue(stoveAngle);
  const startAngle = useSharedValue(stoveAngle);

  const [setting, setSetting] = useState<"low" | "medium" | "high" | "off">(
    "off"
  );

  const rotation = Gesture.Rotation()
    .onStart(() => {
      startAngle.value = angle.value;
    })
    .onUpdate((event) => {
      const newAngle = Math.min(
        Math.PI,
        Math.max(startAngle.value + event.rotation, 0)
      );
      angle.value = newAngle;
      const angleDegree = newAngle * (180 / Math.PI);
      if (angleDegree > 157.5) {
        setSetting("high");
      } else if (angleDegree < 22.5) {
        setSetting("off");
      } else if (angleDegree < 112.5) {
        setSetting("low");
      } else {
        setSetting("medium");
      }
    })
    .onFinalize(() => {
      setStoveAngle(angle.value);
      onRotate(setting);
    })
    .runOnJS(true);

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${angle.value}rad` }],
  }));

  return (
    <View style={{ zIndex: 99, margin: "auto" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: -20,
        }}
      >
        <Button
          title="Low"
          onPress={() => {
            setSetting("low");
            setStoveAngle(0);
            onRotate("low");
          }}
        />
        <Button
          title="Medium"
          onPress={() => {
            setSetting("medium");
            setStoveAngle(Math.PI / 2);
            onRotate("medium");
          }}
        />
        <Button
          title="High"
          onPress={() => {
            setSetting("high");
            setStoveAngle(Math.PI);
            onRotate("high");
          }}
        />
        <Button
          title="Off"
          onPress={() => {
            setSetting("off");
            setStoveAngle(0);
            onRotate("off");
          }}
        />
      </View>
      <GestureDetector gesture={rotation}>
        <Animated.View
          style={[
            {
              zIndex: 99,
              width: 180,
              height: 180,
              margin: "auto",
              borderRadius: 180,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            },
            boxAnimatedStyles,
          ]}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 700,
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: 36,
            }}
          >
            {setting}
          </Text>
        </Animated.View>
        {/* buttons to manually set the heat settings */}
      </GestureDetector>
    </View>
  );
}
