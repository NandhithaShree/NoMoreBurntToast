import { Link, Stack, useNavigation } from "expo-router";
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
      <Stack.Screen options={{ title: "Recipes" }} />
      <View
        style={{
          marginBottom: 16,
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Image
          source={recipes[0].image}
          style={{ width: 90, height: 150, borderRadius: 8 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            flexShrink: 1,
            flexBasis: 0,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {recipes[0].name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "100%",
              height: 40,
              flex: 1,
              flexShrink: 1,
              alignSelf: "stretch",
            }}
            numberOfLines={3}
          >
            {recipes[0].description}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#0009" }}>
            Time: {recipes[0].time} mins | Diffculty: 1/3 🔥
          </Text>
          <Link asChild href={`recipe/${recipes[0].id}/game`}>
            <Pressable
              style={{
                backgroundColor: "#13a570",
                padding: 8,
                borderRadius: 8,
                marginTop: 8,
                width: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
                Start
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
