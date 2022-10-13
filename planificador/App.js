import React, {useState} from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  Modal,
} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';

import {generarId} from './src/helpers';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});

  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a 0');
    }
  };

  const handleNuevoGasto = gasto => {
    if (
      [gasto.nombre, gasto.categoria, gasto.cantidad].includes('') ||
      Number(gasto.cantidad) <= 0
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoActual => {
        if (gastoActual.id === gasto.id) {
          return gasto;
        }
        return gastoActual;
      });
      setGastos(gastosActualizados);
    } else {
      // Agregar el gasto al state
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setModal(false);
  };

  const handleEliminarGasto = id => {
    Alert.alert('¿Estás seguro?', 'El gasto no se podrá recuperar', [
      {text: 'No'},
      {
        text: 'Si, Eliminar',
        onPress: () => {
          const gastosActualizados = gastos.filter(
            gastoActual => gastoActual.id !== id,
          );
          setGastos(gastosActualizados);
          setModal(false);
          setGasto({});
        },
      },
    ]);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          ) : (
            <NuevoPresupuesto
              handleNuevoPresupuesto={handleNuevoPresupuesto}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
          )}
        </View>

        {isValidPresupuesto && (
          <>
            <Filtro />
            <ListadoGastos
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
            />
          </>
        )}
      </ScrollView>
      {modal && (
        <Modal visible={modal} animationType={'slide'}>
          <FormularioGasto
            setModal={setModal}
            handleNuevoGasto={handleNuevoGasto}
            setGasto={setGasto}
            gasto={gasto}
            handleEliminarGasto={handleEliminarGasto}
          />
        </Modal>
      )}
      {isValidPresupuesto && (
        <Pressable style={styles.pressable} onPress={() => setModal(true)}>
          <Image
            source={require('./src/img/nuevo-gasto.png')}
            style={styles.imagen}
          />
        </Pressable>
      )}
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
    minHeight: 400,
  },
  pressable: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  imagen: {
    width: 60,
    height: 60,
  },
});

export default App;
