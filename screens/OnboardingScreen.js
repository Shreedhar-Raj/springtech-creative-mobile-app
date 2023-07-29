import { StyleSheet, Text, Image, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const Done = ({...props}) => (
    <Button title='Done' color='#FFFF' {...props} />
)
const OnboardingScreen = ({navigation}) => {

  return (
    <Onboarding
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    DoneButtonComponent={Done}
    pages={[
      {
        backgroundColor: '#000',
        image: <Image style={styles.text} source={require('../assets/handshake.png')} />,
        title: 'Connect With Your Aura',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#000',
        image: <Image style={styles.text} source={require('../assets/handshake.png')} />,
        title: 'Make New Connections',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#000',
        image: <Image style={styles.text} source={require('../assets/handshake.png')} />,
        title: 'Make New Connections',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      
    ]}
  />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
   text: {
    height: '60%',
    width: '100%',
    alignSelf: 'center',
   }
})