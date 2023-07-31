import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const updates = [
  {
    title: "They're Back!",
    text: 'Our founders David and Debbie Stavelman are back! After spending 8 years in prison for arson, aggravated assault and tax fraud they are back in business. Under their guidance nutriboom plans on recreating itself and wiping the slate clean.',
  },
];

const AnnouncementScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Updates</Text>
      <View style={styles.updateContainer}>
        {updates.map((update, index) => (
          <View key={index} style={styles.update}>
            <Text style={styles.updateTitle}>{update.title}</Text>
            <Text style={styles.updateText}>{update.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.noticecontainer}>
          <View style={styles.notice}>
            <Text style={styles.noticetext}>Stay tuned for more updates!</Text>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default AnnouncementScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 35,
    paddingLeft: 25,
    paddingTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  updateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  update: {
    width: '90%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    shadowColor: '#4d4d4d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  updateTitle: {
    fontSize: 20,
    paddingBottom: 10,
    color: 'black',
    fontWeight: 'bold',

  },
  updateText: {
    color: 'black',
  },
  noticecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  noticetext: {
    color: 'black',
  },
  notice: {
    width: '90%',
    backgroundColor: '#7dc3f5',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#4d4d4d',
    shadowColor: '#4d4d4d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 50,
  }
});


