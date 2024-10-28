// components/PincodeInput.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PincodeInput = ({ onSubmitPincode }) => {
  const [pincode, setPincode] = useState('');

  return (
    <View>
      <Text>Enter Pincode:</Text>
      <TextInput
        placeholder="Enter pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={() => onSubmitPincode(pincode)} />
    </View>
  );
};

export default PincodeInput;
