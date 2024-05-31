import { Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity, } from "react-native";  
import * as Font from 'expo-font';
import {useState} from "react";
import { Link } from 'expo-router';


export default function SigninPage() {
    

    return (
      <View>
        <Signin/>
        <DisplayIcon/>
        <Textinputs/>
        <SigninButton/>
        
      </View>
      
    );
  }


  const Signin = () => {
    return(
        <Text style = {styles.logintext}> Please sign in</Text>
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

  

  const Textinputs = () => {
    const [username, setusername] = useState(" username")
    const [password, setpassword] = useState(" password")
    const [Confirm , setConfirm] = useState(" Confirm password")
  
    return(
      <View>
        <TextInput style = {styles.input1} value={username} onChangeText={setusername} />
        <TextInput style = {styles.input2} value = {password} onChangeText = {setpassword}/>
        <TextInput style = {styles.input2} value = {Confirm} onChangeText = {setConfirm}/>
        {Confirm !== password && <DisplayText />}
      </View>

    )
  }

  const DisplayText = () => {
    return(
      <Text>
        Passwords do not match
      </Text>
    )
  }

  const SigninButton = () => {
    return (
      <View style={{width: 240, flex: 1, paddingLeft: 175,}}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    )
  }




  const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      backgroundColor: '#fef2f3',
    },
    tinyLogo: {
      width: 300,
      height: 250,
      paddingLeft: 370,
    },
    logintext: {
      height: 40,
      fontSize: 15,
      fontFamily: 'Cochin',
      paddingTop: 20,
      paddingLeft: 145,
    },
    button: {
      backgroundColor: '#9e6168',
      padding: 10,
      borderRadius: 5,
      height: 40,
      width: 70,
      
  
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
      paddingLeft: 175,
      paddingBottom: 400,
      textDecorationLine: 'underline'
    },
  });

