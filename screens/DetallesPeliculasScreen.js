import React, { useState } from 'react';  
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Button } from 'react-native';  
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";

const DetallesPelicula = ({ route }) => {  
  const navigation = useNavigation();
  const { pelicula } = route.params;  
  console.log("DETALLE PELICULA!!!!!!!" + pelicula.title);
  const [mensajeVisible, setMensajeVisible] = useState(false);

  console.log('Pelicula:', pelicula); // Verificar el objeto pelicula

  const [fechaSeleccionada, setfechaSeleccionada] = useState(pelicula.showDates[0]?.date || ''); 
  console.log('fechaSeleccionada:', fechaSeleccionada); // Verificar el fechaSeleccionada

  const [horarioSeleccionado, sethorarioSeleccionado] = useState(pelicula.showDates[0]?.showtimes[0] || '');
  console.log('horarioSeleccionado:', horarioSeleccionado); // Verificar el hoarioSeleccionado

  const [cantidadEntradas, setcantidadEntradas] = useState(1); 
  console.log('cantidadEntradas:', cantidadEntradas); // Verificar el cantidadEntradas

  const showDates = Array.isArray(pelicula.showDates) ? pelicula.showDates : [];  
  console.log('ShowDates:', showDates); // Verificar el showDates

  const precio = pelicula.price;  
  console.log('Price:', precio); // Verificar el price

  const filteredShowtimes = showDates.find(date => date.date === fechaSeleccionada)?.showtimes || [];  
  console.log('FilteredShowtimes:', filteredShowtimes); // Verificar el filteredShowtimes

  const totalAPagar = precio * cantidadEntradas;  
  console.log('totalAPagar:', totalAPagar); // Verificar el totalPrice

  const BuyTickets = () => {
    console.log("-------" + pelicula.title);
    console.log("-------" + fechaSeleccionada);
    console.log("-------" + horarioSeleccionado);
    console.log("-------" + cantidadEntradas);
    console.log("-------" + totalAPagar);
    navigation.navigate("Comprar entrada", {
        // item: {
          nombre: pelicula.title,
        // },
        fecha: fechaSeleccionada,
        horario: horarioSeleccionado,
        cantidadEntradas: cantidadEntradas,
        totalAPagar: totalAPagar,
      });
    
      // setMensajeVisible(true); //mje de error
    
  };

  return (  
    <ScrollView style={styles.container}> 
    <View style={styles.body}>
      <View>
        <Image source={{ uri: pelicula.horizontalImgUrl }} style={styles.headerImage} />  
      </View>
      <Text style={styles.title}>{pelicula.title}</Text>  
      
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

      <Text style={styles.label}>Selecciona una fecha:</Text>  
      <Picker 
        style={styles.picker}
        selectedValue={fechaSeleccionada}  
        onValueChange={(itemValue) => {  
          setfechaSeleccionada(itemValue);  
          sethorarioSeleccionado(filteredShowtimes[0] || '');
          console.log('fechaSeleccionada changed:', itemValue); // Verificar cambio de fechaSeleccionada
          console.log('FilteredShowtimes after date change:', filteredShowtimes); // Verificar showtimes filtrados tras cambio de fecha
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
        onValueChange={(itemValue) => {
          sethorarioSeleccionado(itemValue);
          console.log('hoarioSeleccionado:', itemValue); // Verificar cambio de hoarioSeleccionado
        }}  
      >  
        {filteredShowtimes.map((time, index) => (  
          <Picker.Item key={index} label={time} value={time} />  
        ))}  
      </Picker>  

      <Text style={styles.label}>Cantidad de entradas:</Text>  
      <TextInput  
        style={styles.input}  
        keyboardType="numeric"  
        value={String(cantidadEntradas)}  
        onChangeText={(text) => {
          const cantidad = Math.max(0, Number(text));
          setcantidadEntradas(cantidad);
          console.log('cantidadEntradas:', cantidad); // Verificar cambio de cantidadEntradas
        }}  
      />  

      <Text style={styles.label}>Precio total:</Text>  
      <Text style={styles.text}>${totalAPagar.toFixed(2)}</Text>  

      {/* <Button title="Confirmar Compra" onPress={() => {
        alert(`Has comprado ${cantidadEntradas} entradas para ${fechaSeleccionada} a las ${hoarioSeleccionado}. Total: $${totalPrice.toFixed(2)}`);
        console.log('Compra confirmada'); // Verificar que se confirma la compra
      }} />   */}
      <Button color='#EEA816' title="  Confirmar Compra  " onPress={(BuyTickets)}/>  
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
    color: '#fff',
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
  input: {  
    borderColor: 'gray',  
    borderWidth: 1,  
    borderRadius: 5,  
    padding: 10,  
    marginBottom: 20,  
    color: '#fff',
  },  
});  

export default DetallesPelicula;
