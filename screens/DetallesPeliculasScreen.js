import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DetallesPelicula = ({ route }) => {
  const { pelicula } = route.params;
  const [selectedDate, setSelectedDate] = useState(pelicula.showDates[0]?.date || '');
  const [selectedShowtime, setSelectedShowtime] = useState(pelicula.showDates[0]?.showtimes[0] || '');
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const showDates = Array.isArray(pelicula.showDates) ? pelicula.showDates : [];
  const price = pelicula.price;

  const filteredShowtimes = showDates.find(date => date.date === selectedDate)?.showtimes || [];
  const totalPrice = price * ticketQuantity;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pelicula.horizontalImgUrl }} style={styles.headerImage} />
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
      <Text style={styles.text}>${price}</Text>

      <Text style={styles.label}>Selecciona una fecha:</Text>
      <Picker
        selectedValue={selectedDate}
        onValueChange={(itemValue) => {
          setSelectedDate(itemValue);
          setSelectedShowtime(filteredShowtimes[0] || '');
        }}
      >
        {showDates.map((date) => (
          <Picker.Item key={date.date} label={date.date} value={date.date} />
        ))}
      </Picker>

      <Text style={styles.label}>Selecciona un horario:</Text>
      <Picker
        selectedValue={selectedShowtime}
        onValueChange={(itemValue) => setSelectedShowtime(itemValue)}
      >
        {filteredShowtimes.map((time, index) => (
          <Picker.Item key={index} label={time} value={time} />
        ))}
      </Picker>

      <Text style={styles.label}>Cantidad de entradas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(ticketQuantity)}
        onChangeText={(text) => {
          const number = Math.max(0, Number(text));
          setTicketQuantity(isNaN(number) ? 0 : number);
        }}
      />

      <Text style={styles.label}>Precio total:</Text>
      <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`Has comprado ${ticketQuantity} entradas para ${selectedDate} a las ${selectedShowtime}. Total: $${totalPrice.toFixed(2)}`)}
      >
        <Text style={styles.buttonText}>Confirmar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
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
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetallesPelicula;
