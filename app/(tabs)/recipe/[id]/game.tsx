import { Link, Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useEffect } from "react";

import ingredients from "@/data/recipes/fried_rice/ingredients.json";
import steps from "@/data/recipes/fried_rice/steps.json";
import { recipes } from "..";

export default function Home() {
  const navigation = useNavigation();

  const { id } = useLocalSearchParams();
  if (!id || typeof id !== "string") {
    return null;
  }
  const idAsNumber = parseInt(id, 10);
  const recipe = recipes.find((recipe) => recipe.id === idAsNumber);
  if (!recipe) {
    return null;
  }

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView
      style={{
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: 16,
      }}
    >
      {/* show current path */}

      <Stack.Screen options={{ headerShown: false }} />
      {/* <Text>Test</Text> */}
      <Image
        source={recipe.image}
        style={{
          width: "100%",
          height: 150,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        {recipe?.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        Preparation
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        TBA
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        Ingredients
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginBottom: 16,
        }}
      >
        {ingredients.map((ingredient) => ingredient.name).join(", ")}
      </Text>

      <Link
        href={{
          pathname: "recipe/[id]/step/[step]",
          params: { id: 1, step: 1 },
        }}
        asChild
      >
        {/* Start Cooking! button */}
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
        >
          <Text
            style={{
              color: "white",

              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Start Cooking!
          </Text>
          <Text
            style={{
              color: "white",

              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Practice mode
          </Text>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "recipe/[id]/step/[step]?test=true",
          params: { id: 1, step: 1 },
        }}
        asChild
      >
        <Pressable
          style={{
            backgroundColor: "#25a547",
            padding: 16,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: "white",

              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Test your skill!
          </Text>
          <Text
            style={{
              color: "white",

              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Test mode
          </Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
