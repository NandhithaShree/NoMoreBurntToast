import { Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity, } from "react-native";  
import * as Font from 'expo-font';
import {useState} from "react";

export default function Index() {
  const [username, setusername] = useState(" username")
  const [password, setpassword] = useState(" password")
  return (
    <View style = {styles.container}>
      <Login/>
      <DisplayIcon />
      <TextInput style = {styles.input1} value={username} onChangeText={setusername} />
      <TextInput style = {styles.input2} value = {password} onChangeText = {setpassword}/>
      <LoginButton /> 
      <Orsignin />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fef2f3',
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
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    justifyContent: "center",
  },
  input1: {
    height: 50,
    margin: 12,
    borderWidth: 1,
  },
  input2: {
    height: 50,
    margin: 12,
    borderWidth: 1,
  },
  orsignintext: {
    paddingTop: 50,
    paddingLeft: 170,
    paddingBottom: 400,
    textDecorationLine: 'underline'
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

const LoginButton = () => {
  return (
    <View style={{width: 240, flex: 1, paddingLeft: 175,}}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const Orsignin = () => {
  return(
    <TouchableOpacity>
      <Text style = {styles.orsignintext}> Or sign in </Text>
    </TouchableOpacity>
      
  )
}
