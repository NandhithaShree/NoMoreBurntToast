import { Text, View, Image, StyleSheet, } from "react-native";  
import * as Font from 'expo-font';

export default function Index() {
  return (
    <View style = {styles.container}>
      <Login/>
      <DisplayIcon />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fef2f3',
    flex: 1,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logintext: {
    width: 100,
    justifyContent: 'center',
  }
});

const Login = () => {
  return(
      <Text style = {styles.logintext}> Please login</Text>
  )
}

const DisplayIcon = () => {
  return(
    <View style  = {styles.container}>
      <Image
        style = {styles.tinyLogo}
        source={require('C:/Users/nandh/OneDrive/Documents/GitHub/NoMoreBurntToast/assets/images/logoig.png')}
      />
    </View>
  )
}
