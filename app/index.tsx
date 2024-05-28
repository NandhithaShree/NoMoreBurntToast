import { Text, View, Image, StyleSheet, TextInput, } from "react-native";  
import * as Font from 'expo-font';

export default function Index() {
  return (
    <View style = {styles.container}>
      <Login/>
      <DisplayIcon />
      <LoginidInput />
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
    height: 250,
    paddingLeft: 400,
  },
  logintext: {
    flex: 0,
    width: 400,
    height: 40,
    fontSize: 15,
    fontFamily: 'Cochin',
    paddingTop: 20,
    paddingLeft: 170,
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


const LoginidInput = () => {
return(
      <TextInput
        style={{ height: 50, borderColor: 'gray', borderWidth: 1, paddingTop: 400,}}
        placeholder="Enter Text Here"></TextInput>
)

}
