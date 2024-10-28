import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeliveryDate = ({ deliveryDate, calculateDelivery }) => (
  <View style={styles.container}>
    <Button title="Calculate Delivery Date" onPress={calculateDelivery} />
    {deliveryDate && <Text style={styles.deliveryText}>Estimated Delivery Date: {deliveryDate}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  deliveryText: { marginTop: 10, fontSize: 16, color: '#388E3C' },
});

export default DeliveryDate;
