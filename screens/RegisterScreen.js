import { KeyboardAvoidingView, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"


const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.replace("Home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Register</Text>
      <Text style={styles.desc}>To continue to our app, please sign up for our spiritual discovery program Epsilon.</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholderTextColor={'gray'} placeholder="example@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput type="email" placeholderTextColor={'gray'} placeholder="yoursupersecretpassword"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkContainer}>
        <Text style={styles.textLink}>Already have an account? Login!</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignup}
          style={styles.button}
        >
          <Text style={styles.button}>Register →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 20,
      },
      textLink: {
        color: 'gray',
        paddingTop: 20,
        fontSize: 15,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
      },
      inputContainer: {
        width: '80%',
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        color: 'black'
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
      },
      button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 6,
        borderRadius: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
      },
      desc: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '90%',
        paddingBottom: 5,
        color: 'gray',
      },
})