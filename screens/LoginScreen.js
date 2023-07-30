import { KeyboardAvoidingView, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in as: "+user.email)
    navigation.replace("Home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor={'white'} placeholder="example@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput type="email" placeholderTextColor={'white'} placeholder="yoursupersecretpassword"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.linkContainer}>
        <Text onPress={() => navigation.replace("Register")} style={styles.textLink}>Don't have an account? Create One!</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  textLink: {
    color: '#b8b8b8',
    paddingTop: 20,
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFBB99',
    borderRadius: 10,
    color: 'white'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    borderWidth: 1,
    borderColor: '#FFBB99',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FFBB99',
    width: '100%',
    padding: 6,
    borderRadius: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
})