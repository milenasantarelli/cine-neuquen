import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import * as FileSystem from "expo-file-system";

const MisEntradasScreen = () => {
    const [datosDelComprobante, setDatosDelComprobante] = useState(null);
    
    const obtenerDatosComprobantes = async () => {
        const subdirectorio = "assets/data/comprobantes/";
        
        const jsonUri =
        FileSystem.documentDirectory + subdirectorio + "comprobantesDePago.txt";

        console.log(jsonUri);

        try {

        const jsonString = await FileSystem.readAsStringAsync(jsonUri);
        console.log(jsonString);

        if (jsonString.trim() === '') {
            console.log('Archivo vacío');
            return []; // Retorna un array vacío si el archivo está vacío
        }
        
        const comprobantes = JSON.parse(jsonString);
        console.log(comprobantes);
        
        return comprobantes;

        } catch (error) {
        
            console.log("No se encontró archivo JSON o está vacío.", error);
        
            return null;
        }
  };

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerDatosComprobantes();
      if (datos) {
        setdatosDelComprobante(datos);
      }
    };

    cargarDatos();
  }, []);

//   console.log();

  return (
    <ScrollView>
      {/* <View>
        <Image source={require("../assets/logoappc.png")} />
      </View>
      <View>
        <Image source={require("../assets/person.png")} />
        <Text>BIENVENIDO A MIS ENTRADAS</Text>
      </View> */}
       <View style={styles.container}>
      <Text style={styles.title}>Datos de Comprobantes:</Text>
      {datosDelComprobante ? (
        datosDelComprobante.map((comprobante, index) => (
          <View key={index} style={styles.comprobanteContainer}>
            <Text style={styles.label}>Nombre: <Text style={styles.value}>{comprobante.nombre}</Text></Text>
            <Text style={styles.label}>Fecha: <Text style={styles.value}>{comprobante.fecha}</Text></Text>
            <Text style={styles.label}>Horario: <Text style={styles.value}>{comprobante.horario}</Text></Text>
            <Text style={styles.label}>Cantidad de Entradas: <Text style={styles.value}>{comprobante.cantidadEntradas}</Text></Text>
            <Text style={styles.label}>Precio por Entrada: <Text style={styles.value}>{comprobante.precioEntrada}</Text></Text>
            <Text style={styles.label}>Total a Pagar: <Text style={styles.value}>{comprobante.totalAPagar}</Text></Text>
          </View>
        ))
      ) : (
        <Text>No se encontraron datos.</Text>
      )}
    </View>
    </ScrollView>
  );
};

export default MisEntradasScreen;

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    comprobanteContainer: {
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    value: {
      fontSize: 16,
      fontWeight: 'normal',
    },
  });
