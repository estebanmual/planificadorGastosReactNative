import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Gasto from './Gasto';

const ListadoGastos = ({gastos}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>
      {gastos.length === 0 ? (
        <Text style={styles.noGastosText}>No hay gastos</Text>
      ) : (
        gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
  },
  titulo: {
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  noGastosText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ListadoGastos;
