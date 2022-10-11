import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import globalStyles from '../styles';

const Gasto = ({gasto}) => {
  const {nombre, categoria, cantidad, id} = gasto;
  return (
    <View style={styles.contenedor}>
      <Text>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    marginBottom: 20,
  },
});

export default Gasto;
