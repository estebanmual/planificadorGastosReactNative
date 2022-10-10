import React from 'react';

import {View, ScrollView, StyleSheet, Text, Alert} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      console.log(typeof Number(presupuesto));
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0');
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});

export default App;
