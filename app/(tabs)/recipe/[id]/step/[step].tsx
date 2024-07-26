import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link, Stack, router, useNavigation } from "expo-router";
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
import MixButton from "./MixButton";

export default function Page() {
  const [stepDetailedIndex, setStepDetailedIndex] = useState(0);
  const [tab, setTab] = useState("ingredients");
  const [stoveAngle, setStoveAngle] = useState(0);
  const navigation = useNavigation();

  const nextStep = () => {
    if (stepDetailedIndex < steps.length - 1) {
      setStepDetailedIndex(stepDetailedIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepDetailedIndex > 0) {
      setStepDetailedIndex(stepDetailedIndex - 1);
    }
  };

  const step = steps[stepDetailedIndex];
  const image = imageMap[step.step_detailed];

  console.log(image);

  return (
    <View
    // style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      {/* <Link href="../">Back</Link> */}
      {/* a draggable reanimated button for each ingredient */}
      {/* each of them has ingredient.id and ingredient.name */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "#13a570",
            padding: 16,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, height: "auto" }}>
            {/* text */}
            <Text style={{ color: "white", fontSize: 16 }}>
              <Text style={{ fontWeight: 700 }}>
                Step {stepDetailedIndex + 1}:{" "}
              </Text>
              {step.step_detailed_description}
            </Text>
          </View>
          <View style={{ flex: 0, flexDirection: "row" }}>
            <Pressable
              style={{
                backgroundColor: "white",
                width: 24,
                height: 24,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                opacity: stepDetailedIndex === 0 ? 0.5 : 1,
                pointerEvents: stepDetailedIndex === 0 ? "none" : "auto",
                marginRight: 8,
              }}
              onPress={prevStep}
            >
              <Text style={{ fontSize: 16, color: "#13a570", fontWeight: 900 }}>
                {"<"}
              </Text>
            </Pressable>
            {/* next stpe */}
            <Pressable
              style={{
                backgroundColor: "white",
                width: 24,
                height: 24,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                opacity: stepDetailedIndex === steps.length - 1 ? 0.5 : 1,
                pointerEvents:
                  stepDetailedIndex === steps.length - 1 ? "none" : "auto",
              }}
              onPress={nextStep}
            >
              <Text style={{ fontSize: 16, color: "#13a570", fontWeight: 900 }}>
                {">"}
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 200,
            margin: "auto",
            padding: 10,
            backgroundColor: "#0003",
            position: "relative",
          }}
        >
          <Image
            source={image}
            style={{ width: 200, height: 180, marginLeft: 60 }}
          />
          {step.command_type === "mix" && (
            // button to mix
            <MixButton
              label={step.step_detailed_description}
              onMixed={nextStep}
            />
          )}
        </View>

        <View style={{ position: "relative" }}>
          {/* basic tabber */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {[
              { id: "ingredients", label: "Ingredients" },
              { id: "tools", label: "Tools" },
              { id: "stove", label: "Stove" },
              { id: "settings", label: "Settings" },
            ].map(({ id, label }) => (
              <Pressable
                style={{
                  backgroundColor: tab === id ? "#13a570" : "white",
                  padding: 8,
                  margin: 8,
                  borderRadius: 8,
                }}
                onPress={() => setTab(id)}
              >
                <Text style={{ color: tab === id ? "white" : "#13a570" }}>
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>
          {tab === "ingredients" && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                zIndex: 99,
                margin: "auto",
                maxWidth: 300,
              }}
            >
              {ingredients.map((ingredient, index) => (
                <Ingredient
                  ingredient={ingredient}
                  key={`a${index}`}
                  i={index}
                  onDrop={(ingredient_id) => {
                    console.log(
                      step,
                      step.command_details,
                      ingredient_id,
                      "dropped"
                    );
                    if (
                      step.command_type.startsWith("add") &&
                      step.command_details === ingredient_id
                    ) {
                      console.log("next step");
                      nextStep();
                    } else {
                      Toast.show({
                        type: "error",
                        text1: "Incorrect!",
                        text2: "You can try again! Double check the recipe.",
                      });
                    }
                  }}
                />
              ))}
            </View>
          )}
          {tab === "tools" && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: 300,
                zIndex: 99,
                margin: "auto",
                maxWidth: 300,
              }}
            >
              {[{ name: "Pan", id: "pan" }].map((ingredient, index) => (
                <Ingredient
                  ingredient={ingredient}
                  key={`a${index}`}
                  i={index}
                  onDrop={(ingredient_id) => {
                    console.log(
                      step,
                      step.command_details,
                      ingredient_id,
                      "dropped"
                    );
                    if (
                      step.command_type.startsWith("add") &&
                      step.command_details === ingredient_id
                    ) {
                      console.log("next step");
                      nextStep();
                    } else {
                      Toast.show({
                        type: "error",
                        text1: "Incorrect!",
                        text2: "You can try again! Double check the recipe.",
                      });
                    }
                  }}
                />
              ))}
            </View>
          )}
          {tab === "stove" && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: 300,
                zIndex: 99,
                margin: "auto",
                padding: 24,
              }}
            >
              <StoveRotator
                stoveAngle={stoveAngle}
                setStoveAngle={setStoveAngle}
                onRotate={(new_setting) => {
                  console.log(new_setting);
                  if (
                    step.command_type === "stove_switchheat" &&
                    step.command_details === new_setting
                  ) {
                    nextStep();
                  } else {
                    Toast.show({
                      type: "error",
                      text1: "Incorrect!",
                      text2: "You can try again! Double check the recipe.",
                    });
                  }
                }}
              />
            </View>
          )}
          {tab === "settings" && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: 300,
                zIndex: 99,
              }}
            >
              {/* button to end game and return to home */}
              <Pressable
                style={{
                  backgroundColor: "#ec7134",
                  padding: 16,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
                onPress={() => {
                  //i want to change it here
                  navigation.dispatch({ type: "POP_TO_TOP" });
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 24,
                  }}
                >
                  End Game
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>

      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
