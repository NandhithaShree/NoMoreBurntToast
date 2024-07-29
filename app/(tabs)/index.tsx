import { Stack, useNavigation } from "expo-router";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { useState } from "react";

const Page1Image = require("../../assets/images/Page 1 fried rice recipe.jpg");
const Page2Image = require("../../assets/images/page 2 fried rice recipe.jpg");

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  const [page, setPage] = useState(Page1Image);
  const [height, setheight] = useState(0);

  function handleClick() {
    if (page == Page1Image) {
      setPage(Page2Image);
    } else {
      setPage(Page1Image);
    }
  }

  function showrecipe() {
    if (height == 0) {
      setheight(450);
    } else {
      setheight(0);
    }
  }

  return (
    <ScrollView style={{ paddingVertical: 16 }}>
      <Stack.Screen options={{ title: "Recipes" }} />
      <Text
        style={{
          fontSize: 14,
          marginBottom: 16,
          textAlign: "left",
          paddingHorizontal: 16,
        }}
      >
        View finished recipes here for your reference.
      </Text>
      <View
        style={{
          // flex: 0,
          marginTop: 0,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#0003",
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
          onPress={showrecipe}
        >
          <Text
            style={{
              flexGrow: 1,
              fontSize: 16,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Fried Rice
          </Text>
          <Text
            style={{
              fontSize: 64,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 0,
              transform: height == 0 ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            ▼
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: height,
            overflow: "hidden",
            display: "flex",
          }}
        >
          <Image
            resizeMode="contain"
            source={page}
            style={{
              // height: "100%",
              width: "100%",
              marginHorizontal: "auto",
              marginTop: 10,
              objectFit: "contain",
              flexBasis: 0,
              flexGrow: 1,
              flexShrink: 1,
            }}
          ></Image>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              maxWidth: 240,
              marginHorizontal: "auto",
              marginVertical: 10,
              flexShrink: 1,
            }}
          >
            <TouchableOpacity
              onPress={handleClick}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: "black",
                overflow: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                PREV
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClick}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: "black",
                overflow: "hidden",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
