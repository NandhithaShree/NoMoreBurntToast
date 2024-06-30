import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="game"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="step/[step]"
        options={{
          headerShown: false,
          // Set the presentation mode to modal for our modal route.
          //   presentation: "modal",
        }}
      />
    </Stack>
  );
}
