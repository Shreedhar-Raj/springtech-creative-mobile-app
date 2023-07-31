import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

// Sample data for products
const products = [
  {
    id: 1,
    name: 'IQ Increasing Capsules',
    price: '$19.99',
    description: 'Take these pills to increase your IQ.',
    image: require('../assets/pills.png'), // Replace with the actual image path
  },
  {
    id: 2,
    name: 'Focus Energy Drink',
    price: '$14.99',
    description: 'Energize yourself with this drink.',
    image: require('../assets/bottle.png'), // Replace with the actual image path
  },
  {
    id: 3,
    name: 'Productivity Guide',
    price: '$4.99',
    description: 'Learn to get more done!',
    image: require('../assets/guide.png'), // Replace with the actual image path
  },
  {
    id: 4,
    name: 'Gratitude Journal',
    price: '$9.99',
    description: 'A high quality gratitude journal.',
    image: require('../assets/diary.png'), // Replace with the actual image path
  },
  // Add more products here
];

const ShopPage = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProductRow = ({ item }) => (
    <View style={styles.productRow}>
      <View style={styles.productRowItem}>
        {renderProduct({ item: item[0] })}
      </View>
      <View style={styles.productRowItem}>
        {item[1] && renderProduct({ item: item[1] })}
      </View>
    </View>
  );

  const splitArrayIntoChunks = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const productsInRows = splitArrayIntoChunks(products, 2);

  return (
    

      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.header}>Shop</Text>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <FlatList
          data={productsInRows}
          renderItem={renderProductRow}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 10,
  },
  productCard: {
    flex: 1,
    margin: 1,
    padding: 16,
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,

  },
  productImage: {
    width: 145,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 15,
    marginVertical: 2,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 13,
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#000',
    padding: 12,
    width: 140,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productRowItem: {
    flex: 0.48,
  },
});

export default ShopPage;
