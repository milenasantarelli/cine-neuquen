import React, { useState, useEffect } from 'react';  
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';  
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";

const DetallesPelicula = ({ route }) => {  
  const navigation = useNavigation();
  const { pelicula } = route.params;  
  const [fechaSeleccionada, setFechaSeleccionada] = useState(pelicula.showDates[0]?.date || ''); 
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(pelicula.showDates[0]?.showtimes[0] || '');
  const [cantidadEntradas, setCantidadEntradas] = useState(1); 
  const [mensajeError, setMensajeError] = useState('');  // Estado para el mensaje de error

  useEffect(() => {
    if (mensajeError !== "") {
      const timer = setTimeout(() => {
        setMensajeError(""); // Borra el mensaje después de 4 segundos
      }, 4000);
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o el mensaje cambia
    }
  }, [mensajeError]);

  const showDates = Array.isArray(pelicula.showDates) ? pelicula.showDates : [];  
  const precio = pelicula.price;  
  const filteredShowtimes = showDates.find(date => date.date === fechaSeleccionada)?.showtimes || [];  
  const totalAPagar = precio * cantidadEntradas;  

  const BuyTickets = () => {
    if (cantidadEntradas <= 5) {
      navigation.navigate("Comprar entrada", {
        nombre: pelicula.title,
        fecha: fechaSeleccionada,
        horario: horarioSeleccionado,
        cantidadEntradas: cantidadEntradas,
        totalAPagar: totalAPagar,
      });
      setMensajeError('');  // Limpia el mensaje de error si la compra es válida
    } else {
      setMensajeError("Solo puedes comprar un máximo de 5 entradas."); // Muestra mensaje de error
    }
  };

  const incrementar = () => {
    if (cantidadEntradas < 5) {
      const nuevaCantidad = cantidadEntradas + 1;
      setCantidadEntradas(nuevaCantidad);
      setMensajeError("");
    } else {
      setMensajeError("El máximo de entradas por operación es de 5");
    }
  };

  return (  
    <ScrollView style={styles.container}> 
      <View style={styles.body}>
        <View>
          <Image source={{ uri: pelicula.horizontalImgUrl }} style={styles.headerImage} />  
        </View>
        <Text style={styles.title}>{pelicula.title}</Text>  

        {/* Información de la película */}
        <Text style={styles.label}>Descripción:</Text>  
        <Text style={styles.text}>{pelicula.description}</Text>  
        <Text style={styles.label}>Clasificación:</Text>  
        <Text style={styles.text}>{pelicula.ageRating}</Text>  
        <Text style={styles.label}>Categoría:</Text>  
        <Text style={styles.text}>{pelicula.category}</Text>  
        <Text style={styles.label}>Duración:</Text>  
        <Text style={styles.text}>{pelicula.duration} minutos</Text>  
        <Text style={styles.label}>Precio por entrada:</Text>  
        <Text style={styles.text}>${precio}</Text>  

        {/* Selección de fecha y horario */}
        <Text style={styles.label}>Selecciona una fecha:</Text>  
        <Picker 
          style={styles.picker}
          selectedValue={fechaSeleccionada}  
          onValueChange={(itemValue) => {  
            setFechaSeleccionada(itemValue);  
            setHorarioSeleccionado(filteredShowtimes[0] || '');
          }}  
        >  
          {showDates.map((date) => (  
            <Picker.Item key={date.date} label={date.date} value={date.date} />  
          ))}  
        </Picker>  

        <Text style={styles.label}>Selecciona un horario:</Text>  
        <Picker  
          style={styles.picker}
          selectedValue={horarioSeleccionado}  
          onValueChange={(itemValue) => setHorarioSeleccionado(itemValue)}  
        >  
          {filteredShowtimes.map((time, index) => (  
            <Picker.Item key={index} label={time} value={time} />  
          ))}  
        </Picker>  

        {/* Selección de cantidad de entradas con botón de incremento */}
        <Text style={styles.label}>Cantidad de entradas:</Text>  
        <View style={styles.inputContainer}>
          <TextInput  
            style={styles.input}  
            keyboardType="numeric"  
            value={String(cantidadEntradas)}  
            onChangeText={(text) => {
              const cantidad = Math.max(0, Math.min(5, Number(text)));
              setCantidadEntradas(cantidad);
              setMensajeError(cantidad > 5 ? "El máximo de entradas por operación es de 5" : ''); // Actualiza el mensaje de error si es necesario
            }}  
          />
          <TouchableOpacity style={styles.incrementButton} onPress={incrementar}>
            <Text style={styles.incrementButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Mostrar mensaje de error en rojo */}
        {mensajeError ? <Text style={styles.errorText}>{mensajeError}</Text> : null}

        {/* Total y confirmación de compra */}
        <Text style={styles.label}>Precio total:</Text>  
        <Text style={styles.text}>${totalAPagar.toFixed(2)}</Text>  
        <Button color='#EEA816' title="  Confirmar Compra  " onPress={BuyTickets} />  
      </View>
    </ScrollView>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 0,  
    backgroundColor: '#f9f9f9',  
  },  
  body: {
    height: 1400,
    backgroundColor: '#000',
    padding: 20,
  },
  picker: {
    color: '#000',
  },
  headerImage: {  
    height: 300,  
    width: '100%',  
    borderRadius: 10,  
    marginBottom: 20,  
  },  
  title: {  
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 10,  
    color:'#fff'
  },  
  label: {  
    fontSize: 18,  
    fontWeight: 'bold',  
    marginTop: 10, 
    marginBottom: 10, 
    color: '#fff',
  },  
  text: {  
    fontSize: 16,  
    marginBottom: 10,
    color:'#fff',  
  },  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {  
    flex: 1,
    borderColor: 'gray',  
    borderWidth: 1,  
    borderRadius: 5,  
    padding: 10,  
    color: '#fff',
  },
  incrementButton: {
    marginLeft: 10,
    backgroundColor: '#EEA816',
    padding: 10,
    borderRadius: 5,
  },
  incrementButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {  // Estilo para el mensaje de error en rojo
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});  

export default DetallesPelicula;