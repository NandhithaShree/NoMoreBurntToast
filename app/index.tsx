import { Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity, } from "react-native";  
import * as Font from 'expo-font';

export default function Index() {
  return (
    <View style = {styles.container}>
      <Login/>
      <DisplayIcon />
      <LoginButton /> 
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
  },
  button: {
    backgroundColor: '#9e6168',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    justifyContent: "center",
  },
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

const LoginButton = () => {
  return (
    <View style={{width: 240, flex: 1, paddingLeft: 175,}}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

