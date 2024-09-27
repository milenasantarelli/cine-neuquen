//Componente provisorio. El que se utilizará sigue en producción
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';

const MenuFechaHora = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const availableDates = ['2024-10-01', '2024-10-02', '2024-10-03'];
  const availableTimes = {
    '2024-10-01': ['12:00', '15:00'],
    '2024-10-02': ['14:00', '17:00'],
    '2024-10-03': ['16:00', '19:00'],
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setMenuVisible(false);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>

      {/* Encabezado de fechas */}
      <Pressable style={styles.header} onPress={toggleMenu}>
        <Text style={styles.headerText}>
          {selectedDate ? `Fecha seleccionada: ${selectedDate}` : 'Selecciona una fecha'}
        </Text>
      </Pressable>

      {/* Menú desplegable de fechas */}
      {isMenuVisible && (
        <View style={styles.menu}>
          <FlatList
            data={availableDates}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.menuItem}
                onPress={() => handleDateSelection(item)}
              >
                <Text style={styles.menuItemText}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}

      {/* Horarios de fecha seleccionada */}
      {selectedDate && !isMenuVisible && (
        <View style={styles.timesContainer}>
          {availableTimes[selectedDate].map((time) => (
            <Pressable
              key={time}
              style={styles.timeItem}
              onPress={() => handleTimeSelection(time)}
            >
              <Text style={styles.timeItemText}>{time}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* Fecha y hora seleccionada */}
      {selectedDate && selectedTime && (
        <Text style={styles.selectedText}>Fecha y hora seleccionada: {selectedDate}, {selectedTime} hrs.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  menu: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItemText: {
    fontSize: 16,
  },
  timesContainer: {
    marginTop: 10,
  },
  timeItem: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 6,
    marginBottom: 5,
    alignItems: 'center',
  },
  timeItemText: {
    fontSize: 16,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default MenuFechaHora;
