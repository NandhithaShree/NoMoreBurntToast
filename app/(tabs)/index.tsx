import { Stack, useNavigation } from "expo-router";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const Page1Image = require('../../assets/images/Page 1 fried rice recipe.jpg');
  const Page2Image = require('../../assets/images/page 2 fried rice recipe.jpg');
  const [page, setPage] = useState(Page1Image);
  var height = 450; //how do i change this variable

  function handleClick() {
    if (page == Page1Image) {
      setPage(Page2Image);
    }
    else {
      setPage(Page1Image)
    }
  }


  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 0, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            paddingLeft: 32,
            paddingRight: 32,
            textAlign: "center",
            marginTop: 50,
          }}
        >
          Welcome to No More Burnt Toast!
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 500,
            paddingLeft: 32,
            paddingRight: 32,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Check out recipes you can make in the "Recipes" tab.
        </Text>

      </View>
      <Text style={{
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 10,
        textAlign: "center",
      }}> View finished recipes here</Text>
      <View style={{
        flex: 0,
        marginTop: 20,
        height: height,
      }}>
        <Button title="fried rice recipe" color="black" ></Button>
        <View style={{
          height: '100%',
        }}>
          <Image source={page}
            style={{
              height: "100%",
              width: "90%",
              marginHorizontal: 20,
              flex: 0,
              marginTop: 10,
            }}></Image>
          <TouchableOpacity onPress={handleClick} style={{
            position: 'absolute',
            height: '5%',
            backgroundColor: "black",
            top: 470,
            left: 210,
            overflow: 'hidden',
          }}>
            <Text style={{
              color: 'white',
            }}> next </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClick} style={{
            position: 'absolute',
            height: '5%',
            backgroundColor: "black",
            top: 470,
            left: 160,
            overflow: 'hidden',
          }}>
            <Text style={{
              color: 'white',
            }}> prev </Text>
          </TouchableOpacity>
        </View>
      </View >
    </View>
  );
}



