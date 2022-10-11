import React from 'react';
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

const FormularioGasto = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            placeholder="Nombre del gasto. ej. Transporte"
            style={styles.input}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            placeholder="Cantidad del gasto. ej. 300"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoría Gasto</Text>
          <Picker>
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

        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
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
