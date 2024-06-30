import { Stack, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          paddingLeft: 32,
          paddingRight: 32,
          textAlign: "center",
        }}
      >
        Welcome to No More Burnt Toast!
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          paddingLeft: 32,
          paddingRight: 32,
          marginTop: 8,
          textAlign: "center",
        }}
      >
        Check out recipes you can make in the "Recipes" tab.
      </Text>
    </View>
  );
}
