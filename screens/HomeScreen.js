import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleview}>
      <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => navigation.navigate("Shop")} style={styles.shop}>
        <Text style={styles.textshop}>Shop</Text>
        <AntDesign name="shoppingcart" size={100} color="white" />
        </TouchableOpacity>
        <View style={styles.two}>
            <TouchableOpacity onPress={() => navigation.navigate("Announcements")} style={styles.announcement}>
            <MaterialIcons name="announcement" size={50} color="white" />
                <Text style={styles.announcementText}>Updates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.focus} onPress={() => {}}>
            <FontAwesome5 name="brain" size={50} color="white" />
              <Text style={styles.focustext}>Elevate</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.two}>
            <TouchableOpacity onPress={() => {}} style={styles.announcement}>
            <AntDesign name="smileo" size={50} color="white" />
                <Text style={styles.announcementText}>Epsilon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.focus} onPress={() => {}}>
            <Entypo name="progress-two" size={50} color="white" />
              <Text style={styles.focustext}>Progress</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  announcementText: {
    color: 'white',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  links: {
    alignItems: 'center',
    paddingTop: 20,
  },
  two: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  focustext: {
    color: 'white',
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  titleview: {
    alignItems: 'center',
  },
  shop: {
    width: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    borderWidth: 0.3,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    alignContent: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    height: "42%"
  },
  announcement: {
    width: '45%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    paddingTop: 10,
    borderWidth: 1,
  },
  focus: {
    width: '45%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    marginLeft: 5,
  },
  textshop: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  titleview: {

  }
})