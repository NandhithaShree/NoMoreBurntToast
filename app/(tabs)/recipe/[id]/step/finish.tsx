import { Link, Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Button, Image, Pressable, Text, View } from "react-native";
import { useEffect } from "react";

// import image @assets/game/recipes/fried_rice/splash.jpg

const recipes = [
  {
    id: 0,
    name: "Fried Rice",
    description: "A classic Asian delicacy that's easy to make.",
    difficulty: 1,
    time: 20,
    image: require("@/assets/game/recipes/fried_rice/splash.jpg"),
  },
];
export { recipes };

export default function Home() {
  // get url param ?score=1-100
  const score = useLocalSearchParams().score;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View
      style={{
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: 16,
      }}
    >
      <Stack.Screen options={{ title: "Recipe complete!" }} />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Congratulations! You have completed the recipe for {recipes[0].name}!
      </Text>
      {score && (
        <Text
          style={{
            fontSize: 16,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          You scored {score} out of 100. Great job!
        </Text>
      )}
      <Image
        source={recipes[0].image}
        style={{ width: 180, height: 150, borderRadius: 8, margin: "auto" }}
      />

      {/* return to first page button */}
      <Link
        href={{
          pathname: "recipe",
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
          <Text style={{ color: "white", textAlign: "center" }}>
            Return to main menu
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
