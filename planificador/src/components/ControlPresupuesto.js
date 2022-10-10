import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import globalStyles from '../styles';

function ControlPresupuesto() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image source={require('../img/grafico.jpg')} style={styles.imagen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
  },
});

export default ControlPresupuesto;
