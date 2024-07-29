import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* rest of the app */}

      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Recipes",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="recipe"
          options={{
            title: "Game",

            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="gamepad" color={color} />
            ),
          }}
        />
      </Tabs>

      <Toast />
    </GestureHandlerRootView>
  );
}
