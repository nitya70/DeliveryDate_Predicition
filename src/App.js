import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, Alert, View } from 'react-native';
import ProductCard from './Components/ProductCard';
import DeliveryDate from './Components/DeliveryDate';
import csvParser from './Services/csvParser';
import calculateDeliveryDate from './Services/calculateDeliveryDate';

const App = () => {
  const [products, setProducts] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pincode, setPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(null);

  // Load CSV data
  useEffect(() => {
    csvParser('./data/products.csv', setProducts);
    csvParser('./data/pincodes.csv', setPincodes);
  }, []);

  const handleCalculateDelivery = () => {
    if (selectedProduct && pincode) {
      const provider = pincodes.find(entry => entry.pincode === pincode)?.provider || 'General Partners';
      const date = calculateDeliveryDate(provider, selectedProduct.inStock);
      setDeliveryDate(date);
    } else {
      Alert.alert('Error', 'Please select a product and enter a pincode');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Product Selection</Text>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={() => setSelectedProduct(product)}
        />
      ))}

      <Text style={styles.label}>Enter Pincode:</Text>
      <TextInput
        placeholder="e.g., 110001"
        value={pincode}
        onChangeText={setPincode}
        style={styles.input}
      />

      <DeliveryDate
        deliveryDate={deliveryDate}
        calculateDelivery={handleCalculateDelivery}
      />
    </ScrollView>
  );
};

export default App;
