import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

function ControlPresupuesto({presupuesto}) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image source={require('../img/grafico.jpg')} style={styles.imagen} />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto:</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible:</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado:</Text>
          {formatearCantidad(presupuesto)}
        </Text>
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
  contenedorTexto: {
    marginTop: 50,
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default ControlPresupuesto;
