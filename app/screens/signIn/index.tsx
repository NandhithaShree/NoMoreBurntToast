import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { useCallback, useState } from "react";
import { Link } from "expo-router";
// import auth from "@react-native-firebase/auth";

export default function SigninPage() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View>
      <Signin />
      <DisplayIcon />
      <Textinputs
        username={username}
        setusername={setusername}
        password={password}
        setpassword={setpassword}
      />
      <SigninButton username={username} password={password} />
    </View>
  );
}

const Signin = () => {
  return <Text style={styles.logintext}>Sign up</Text>;
};

const DisplayIcon = () => {
  return (
    <View style={styles.container}>
      {/* { <Image
          style = {styles.tinyLogo}
          source={require('../../assets/images/logoig.png')}
        /> } */}
    </View>
  );
};

const Textinputs = ({
  username,
  setusername,
  password,
  setpassword,
}: {
  username: string;
  setusername: (username: string) => void;
  password: string;
  setpassword: (password: string) => void;
}) => {
  const [Confirm, setConfirm] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input1}
        value={username}
        onChangeText={setusername}
        placeholder="Email"
      />
      <TextInput
        style={styles.input2}
        value={password}
        onChangeText={setpassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TextInput
        style={styles.input2}
        value={Confirm}
        onChangeText={setConfirm}
        secureTextEntry={true}
        placeholder="Confirm Password"
      />
      {Confirm !== password && <DisplayText />}
    </View>
  );
};

const DisplayText = () => {
  return <Text>Passwords do not match</Text>;
};

const SigninButton = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const signIn = () => {};
  // const signIn = useCallback(() => {
  //   auth()
  //     .createUserWithEmailAndPassword(username, password)
  //     .then(() => {
  //       console.log("User account created & signed in!");
  //       alert("User account created & signed in!");
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/email-already-in-use") {
  //         console.log("That email address is already in use!");
  //         alert("That email address is already in use!");
  //       }

  //       if (error.code === "auth/invalid-email") {
  //         console.log("That email address is invalid!");
  //         alert("That email address is invalid!");
  //       }

  //       console.error(error);
  //     });
  // }, [username, password]);
  return (
    <View style={{ width: 240, flex: 1, paddingLeft: 175 }}>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "#fef2f3",
  },
  tinyLogo: {
    width: 300,
    height: 250,
    paddingLeft: 370,
  },
  logintext: {
    height: 40,
    fontSize: 15,
    fontFamily: "Cochin",
    paddingTop: 20,
    paddingLeft: 145,
  },
  button: {
    backgroundColor: "#9e6168",
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 90,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
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
    textDecorationLine: "underline",
  },
});
