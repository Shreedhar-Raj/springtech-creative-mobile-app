import { StyleSheet, Text, Image, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const Done = ({...props}) => (
    <Button title='Done' color='#000' {...props} />
)
const OnboardingScreen = ({navigation}) => {

  return (
    <Onboarding
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    DoneButtonComponent={Done}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image style={styles.text} source={require('../assets/1.png')} />,
        title: 'Elevate Yourself',
        subtitle: 'Increase your intellectual capacity.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.text} source={require('../assets/2.png')} />,
        title: 'Meditate Like Never Again',
        subtitle: 'Practice mindfulness like never before with our app.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.text} source={require('../assets/3.png')} />,
        title: 'Enjoy!',
        subtitle: 'We hope you have an awsome time using our app!',
      },
      
    ]}
  />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
   text: {
    height: 300,
    width: 300,
    alignContent: 'center',
    justifyContent: 'center',
   }
})