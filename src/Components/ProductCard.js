import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductCard = ({ product, onSelect }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{product.name}</Text>
    <Text>Price: ${product.price}</Text>
    <Text>Status: {product.inStock === 'true' ? 'In Stock' : 'Out of Stock'}</Text>
    <Button
      title="Select Product"
      onPress={onSelect}
      disabled={product.inStock === 'false'}
    />
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 15, margin: 10, backgroundColor: '#fafafa', borderRadius: 5 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default ProductCard;
