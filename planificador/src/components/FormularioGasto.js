import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles';

const FormularioGasto = props => {
  const {setModal, handleNuevoGasto, setGasto, gasto} = props;

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (gasto?.nombre) {
      setNombre(gasto.nombre);
      setCantidad(gasto.cantidad);
      setCategoria(gasto.categoria);
      setFecha(gasto.fecha);
      setId(gasto.id);
    }
  }, [gasto]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.contenedorBtns}>
        <Pressable
          style={[styles.btn, styles.btnCancelar]}
          onLongPress={() => {
            setModal(false);
            setGasto({});
          }}>
          <Text style={styles.btnTexto}>Cancelar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>
          {gasto?.nombre ? 'Editar' : 'Nuevo'} Gasto
        </Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            placeholder="Nombre del gasto. ej. Transporte"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            placeholder="Cantidad del gasto. ej. 300"
            keyboardType="numeric"
            style={styles.input}
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoría Gasto</Text>
          <Picker
            selectedValue={categoria}
            onValueChange={item => setCategoria(item)}>
            <Picker.Item label="--Seleccione--" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Gastos Varios" value="gastos" />
            <Picker.Item label="Ocio" value="ocio" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscripciones" value="suscripciones" />
          </Picker>
        </View>

        <Pressable
          style={styles.submitBtn}
          onPress={() =>
            handleNuevoGasto({nombre, cantidad, categoria, id, fecha})
          }>
          <Text style={styles.submitBtnTexto}>
            {gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#1E40AF',
    flex: 1,
  },
  contenedorBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
  },
  btnCancelar: {
    backgroundColor: '#DB2777',
  },
  btnEliminar: {
    backgroundColor: 'red',
  },
  btnTexto: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
  },
  formulario: {
    ...globalStyles.contenedor,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748B',
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3B82F6',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  submitBtnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormularioGasto;
