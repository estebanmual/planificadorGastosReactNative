import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Gasto = ({gasto}) => {
  return (
    <View>
      <Text>{gasto.nombre}</Text>
    </View>
  );
};

export default Gasto;
